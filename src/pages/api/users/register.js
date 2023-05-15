import bcrypt from "bcryptjs";
// CONNECT DB
import db from "../server/config/db";
// MODELS
import User from "../server/models/User";

export default async (req, res) => {
  try {
    await db.connect();

    if (req.method === "POST") {
      const { email, password, firstName, lastName } = req.body;
      // console.log(email, password);

      const user = await User.findOne({ email: email });
      if (user) return res.status(422).json({ error: "User already exists" });

      const HashedPassword = await bcrypt.hash(password, 12);

      const newUser = await new User({
        email: email,
        password: HashedPassword,
        name: `${firstName} ${lastName}`,
      }).save();


      res.status(200).json({ message: "Signup Up Success" });
    }

    await db.disconnect();
  } catch (error) {
    console.log(error);
  }
};
