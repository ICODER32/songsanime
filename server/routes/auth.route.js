import express from "express";
import { Signup, SignIn, GoogleAuth } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/signin", SignIn);
router.post("/google", GoogleAuth);
export default router;
