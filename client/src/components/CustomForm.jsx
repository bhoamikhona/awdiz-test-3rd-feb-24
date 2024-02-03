import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [data, setData] = useState({
    name: "",
    checked: false,
  });

  const handleFormSubmit = function (e) {
    e.preventDefault();
    addTask({
      name: task,
      id: Date.now(),
      checked: false,
    });
    setTask("");
  };

  const addNewTask = async function (e) {
    const { name, checked } = data;
    e.preventDefault();

    try {
      const { data } = await axios.post("/task/add-new-task", {
        name,
        checked,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Task Added");
      }
    } catch (error) {}
  };

  return (
    <form onSubmit={addNewTask}>
      <div className="input-control">
        <label htmlFor="task">Enter Task</label>
        <input
          type="text"
          id="task"
          maxLength={60}
          required
          value={data.name}
          onInput={(e) => setData({ ...data, name: e.target.value })}
          autoComplete="off"
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default CustomForm;
