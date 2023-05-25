import db from "../server/config/db";
import Host from "../server/models/Host";


export default async function handler (req, res) {
    await db.connect();

  const {
    method,
    query: { id },
    body,
  } = req;

  switch (method) {
    case "GET":
      try {
        const host = await Host.findById(id);
        if (!host) return res.status(404).json({ msg: "Task does not exists" });
        return res.status(200).json(host);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }

    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
};


// // CONFIG DB
// import db from "../server/config/db";
// // CONTROLLERS
// import { getHost, putHost, deleteHost } from "../server/controllers/HostCtrl";

// export default async function handler(req, res) {

//         await db.connect();

//         // type of request
//         const { method } = req

//         switch (method){
//             case "GET":
//                 getHost(req, res);
//                 break;
//             case 'PUT':
//                 putHost(req, res);
//                 break;
//             case 'DELETE':
//                 deleteHost(req, res);
//                 break;
//             default :
//                 res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
//                 res.status(405).end(`Method ${method} Not Allowd`)
//                 break;
//         }
// }
