import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import axios from "axios";

const TaskList = ({ tasks, toggleTask, deleteTask, editTask }) => {
  const [newTasks, setNewTasks] = useState([]);

  useEffect(() => {
    axios
      .get("/")
      .then((newTasks) => console.log(newTasks))
      .catch((err) => console.log(err));

    console.log(newTasks);
  }, []);

  return (
    <ul>
      {/* {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))} */}
      {newTasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task.name}
          // toggleTask={toggleTask}
          // deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
