import express from "express";
import {
  signOut,
  deleteUser,
  updateUser,
  test,
  train,
  getUsers,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
// import test from "../controllers/user.controller.js";
const router = express.Router();

router.get("/test", test);
router.get("/train", train);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signOut);
router.get('/getusers', verifyToken, getUsers )
// router.get("/train", (req, res) => {
//   res.json({ mongoose: "API IS WORKING" });
// });

export default router;
