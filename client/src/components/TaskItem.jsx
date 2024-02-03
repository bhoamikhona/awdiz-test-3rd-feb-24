import React, { useState } from "react";

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = function () {
    setIsChecked(!isChecked);
    toggleTask(task.id);
  };

  return (
    <li>
      <div className="task-group">
        <input
          type="checkbox"
          name={task.name}
          id={task.id}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor={task.id}>{task.name}</label>
        <button onClick={() => deleteTask(task.id)}>delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
