import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

const test = (req, res) => {
  res.json({ message: "API IS WORKING" });
};

const train = (req, res) => {
  res.json({ message: "train" });
};

const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId)
    return next(errorHandler(403, "You are not allowed to update this user"));
  if (req.body.password) {
    if (req.body.password.length < 6)
      return next(errorHandler(400, "Password must be atleast 6 characters"));
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }
  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username.length > 20)
      return next(
        errorHandler(
          400,
          "username should be more than 7 and less than 20 characters"
        )
      );
    if (req.body.username.includes(" "))
      return next(errorHandler(400, "username must not contain a space"));
    if (req.body.username !== req.body.username.toLowerCase())
      return next(errorHandler(400, "username must be lowercase"));
    if (!req.body.username.match(/^[a-zA-Z0-9]+$/))
      return next(
        errorHandler(400, "username must only contain letters and numbers")
      );
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {}
  console.log(req.user);
};
export { test, train, updateUser };
