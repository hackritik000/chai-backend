import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

console.log("hi I am in users");
const router = Router();
router.route("/register").post(registerUser);

export default router;
