// src/pages/TaskList.js
// A page to display a list of tasks with the ability to add, edit, and delete tasks.
import React, { useState } from "react";
import TaskCard from "../components/TaskCard";
import Modal from "../components/Modal";
import InputField from "../components/InputField";
import Button from "../components/Button";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState({ title: "", description: "" });

    const handleSaveTask = () => {
        if (currentTask.id) {
            setTasks(
                tasks.map((task) => (task.id === currentTask.id ? currentTask : task))
            );
        } else {
            setTasks([...tasks, { ...currentTask, id: Date.now(), completed: false }]);
        }
        setCurrentTask({ title: "", description: "" });
        setIsModalOpen(false);
    };

    return (
        <div className="task-list">
            <h2>Your Tasks</h2>
            <Button onClick={() => setIsModalOpen(true)}>Add Task</Button>
            <div className="tasks">
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onEdit={(task) => {
                            setCurrentTask(task);
                            setIsModalOpen(true);
                        }}
                        onDelete={(id) => setTasks(tasks.filter((task) => task.id !== id))}
                    />
                ))}
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h3>{currentTask.id ? "Edit Task" : "Add Task"}</h3>
                <InputField
                    label="Title"
                    value={currentTask.title}
                    onChange={(value) => setCurrentTask({ ...currentTask, title: value })}
                />
                <InputField
                    label="Description"
                    value={currentTask.description}
                    onChange={(value) =>
                        setCurrentTask({ ...currentTask, description: value })
                    }
                />
                <Button onClick={handleSaveTask}>Save</Button>
            </Modal>
        </div>
    );
};

export default TaskList;
