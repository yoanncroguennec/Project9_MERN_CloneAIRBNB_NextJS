// CONNECT DB
import db from "../server/config/db";
// MODELS
import Category from "../server/models/Category";


export default async function handler(req, res) {
  await db.connect();

  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const categories = await Category.find();
        // console.log(categories);
        return res.status(200).json(categories);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    case "POST":
      try {
        // console.log(body);
        const newCategory = new Category(body);
        const savedCategory = await newCategory.save();
        return res.status(200).json(savedCategory);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    default:
      return res.status(400).json({ msg: "this message" });
  }
}
