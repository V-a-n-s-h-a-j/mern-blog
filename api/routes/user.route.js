import express from "express";
import {signOut, deleteUser, updateUser, test, train } from "../controllers/user.controller.js";
import { verifyUser } from "../utils/verifyUser.js";
// import test from "../controllers/user.controller.js";
const router = express.Router();

router.get("/test", test);
router.get("/train", train);
router.put("/update/:userId", verifyUser, updateUser);
router.delete("/delete/:userId", verifyUser, deleteUser);
router.post("/signout", signOut);
// router.get("/train", (req, res) => {
//   res.json({ mongoose: "API IS WORKING" });
// });

export default router;
