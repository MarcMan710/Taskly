import React from "react";

const TaskCard = ({ task, onEdit, onDelete }) => {
  const formattedDueDate = new Date(task.dueDate).toLocaleDateString();

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {formattedDueDate}</p>
      <div className="task-actions">
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;

