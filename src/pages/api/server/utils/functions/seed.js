// URL : "http://localhost:3000/api/server/utils/functions/seed"
import { createRouter } from "next-connect";
// CONNECT DB
import db from "../../config/db";
// MODELS
import Host from "../../models/Host";
import Category from "../../models/Category";
// DATA
import { dataHosts } from "../data/DataHosts";
import { dataCategories } from "../data/DataCategories";



// Default Req and Res are IncomingMessage and ServerResponse
// You may want to pass in NextApiRequest and NextApiResponse
const router = createRouter();

router.get(async (req, res) => {
  // res.send("Hello world");
  await db.connect();
  await Host.deleteMany();
  await Host.insertMany(dataHosts.hosts);
  await Category.deleteMany();
  await Category.insertMany(dataCategories.categories);
  await db.disconnect();
  res.send({ message: "Seeded  successfully" });
});

// create a handler from router with custom
// onError and onNoMatch
export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).end("Quelque chose s'est mal passé.");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("La page n'est pas trouvée.");
  },
});