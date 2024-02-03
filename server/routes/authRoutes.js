import express, { Router } from "express";
import cors from "cors";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = Router();
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
