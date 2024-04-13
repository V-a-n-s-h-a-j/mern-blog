import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  //   console.log("hello");
  //   res.json({ hi });
  if (!token) next(errorHandler(401, "Unauthorized"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) next(errorHandler(401, "Unauthorized"));
    req.user = user;
    next();
  });
};
