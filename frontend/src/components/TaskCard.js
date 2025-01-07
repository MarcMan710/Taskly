// src/components/TaskCard.js
// A task card component to display task details.
import React from "react";

const TaskCard = ({ task, onEdit, onDelete }) => {
    return (
        <div className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.completed ? "Completed" : "Pending"}</p>
            <div className="task-actions">
                <button onClick={() => onEdit(task)}>Edit</button>
                <button onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </div>
    );
};

export default TaskCard;
