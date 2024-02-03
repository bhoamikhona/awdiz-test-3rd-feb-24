import express, { Router } from "express";
import AuthRoutes from "./authRoutes.js";
import TaskRoutes from "./taskRoutes.js";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/task", TaskRoutes);

export default router;
