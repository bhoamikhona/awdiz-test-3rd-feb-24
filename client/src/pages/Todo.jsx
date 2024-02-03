import React, { useState } from "react";
import axios from "axios";

export default function Todo() {
  const [task, setTask] = useState("");

  const addTodo = function (e) {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <label>Enter Task</label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </form>
    </div>
  );
}
