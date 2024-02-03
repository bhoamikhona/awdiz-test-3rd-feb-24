import express, { Router } from "express";
import cors from "cors";
import { addNewTask } from "../controllers/taskController.js";

const router = Router();
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
router.post("/add-new-task", addNewTask);

export default router;
