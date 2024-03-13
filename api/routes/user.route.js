import express from "express";
import { test, train } from "../controllers/user.controller.js";
// import test from "../controllers/user.controller.js";
const router = express.Router();

router.get("/test", test);
router.get("/train", train);
// router.get("/train", (req, res) => {
//   res.json({ mongoose: "API IS WORKING" });
// });

export default router;
