import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
    // return res.status(400).send("All fields are required");
  }
  const hashedPass = bcryptjs.hashSync(password, 10); // Hash the user
  const newUser = new User({ username, email, password: hashedPass });
  try {
    await newUser.save();
    res.json({ message: "signup successfull" });
  } catch (error) {
    // res.status(500).json({ message: error.message });

    next(errorHandler(500, error.message));
  }
};
