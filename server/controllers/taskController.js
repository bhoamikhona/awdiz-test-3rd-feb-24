import Task from "../models/task.js";

export const addNewTask = async function (req, res) {
  const { name, checked } = req.body;
  try {
    if (!name) {
      return res.json({
        error: "Task name is required",
      });
    }

    const task = await Task.create({
      name,
      checked,
    });

    return res.json(task);
  } catch (error) {
    console.log(error);
  }
};
