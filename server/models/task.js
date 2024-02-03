import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  name: String,
  checked: Boolean,
});

const TaskModel = mongoose.model("Task", taskSchema);

export default TaskModel;
