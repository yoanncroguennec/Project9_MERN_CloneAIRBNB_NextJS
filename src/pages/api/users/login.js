import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// CONNECT DB
import db from "../server/config/db";
// MODELS
import User from "../server/models/User";

export default async (req, res) => {
try {
  if (req.method === "POST") {
    const { email, password } = req.body;
    // console.log(email, password, firstName, lastName)

    const user = await User.findOne({ email: email });

    if (!user)
      return res.status(422).json({ error: "L'utilisateur n'existe pas" });

    const mdpMatch = await bcrypt.compare(password, user.password);
    if (mdpMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      if (!mdpMatch)
        return res.status(401).json({ error: "Invalid credentials" });

      const { email, _id, name } = user;

      res.status(201).json({
        token,
        user: { email, _id, name },
        message: "login successful",
      });
    }
  }
} catch (error) {
  console.log(error);
}
};
