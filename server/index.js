import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import AllRoutes from "./routes/index.js";
import TaskSchema from "./models/task.js";

const app = express();

dotenv.config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", AllRoutes);

app.get("/", function (req, res) {
  TaskSchema.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.json(err));
});

const data = TaskSchema.find();
console.log(data);

// database connection
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Database connected"));

const port = 8000;
app.listen(port, () => console.log(`App started listening on port ${port}`));
