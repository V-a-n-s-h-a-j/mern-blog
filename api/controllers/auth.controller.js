import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "")
    return next(errorHandler(400, "All fields are required"));
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "Invalid Email"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(400, "Invalid Passsword"));
    const {password: pass, ...rest} = validUser._doc;
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

const signup = async (req, res, next) => {
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

export { signin, signup };
