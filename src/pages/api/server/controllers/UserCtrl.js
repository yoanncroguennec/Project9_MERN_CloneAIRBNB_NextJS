import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// MODELS
import User from "../models/User";

export async function postLogin(req, res) {
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
}
