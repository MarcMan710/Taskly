// src/pages/TaskList.js
// A page to display a list of tasks with the ability to add, edit, and delete tasks.
import React, { useState } from "react";
import TaskCard from "../components/TaskCard";
import Modal from "../components/Modal";
import InputField from "../components/InputField";
import Button from "../components/Button";
import SelectField from "../components/SelectField";

const initialTask = { title: "", description: "", status: "not started", dueDate: "" };

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState(initialTask);
    const [filter, setFilter] = useState("all");

    const handleSaveTask = () => {
        if (currentTask.id) {
            setTasks(
            tasks.map((task) => (task.id === currentTask.id ? currentTask : task))
            );
        } else {
            setTasks([
            ...tasks,
            { ...currentTask, id: Date.now(), completed: false },
            ]);
        }
        setCurrentTask(initialTask);
        setIsModalOpen(false);
    };

    const handleStatusFilterChange = (event) => setFilter(event.target.value);

    return (
        <div className="task-list">
            <h2>Your Tasks</h2>
            <Button onClick={() => setIsModalOpen(true)}>Add Task</Button>
            <div className="filter-status">
                <select value={filter} onChange={handleStatusFilterChange}>
                    <option value="all">All</option>
                    <option value="not started">Not Started</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div className="tasks">
                {tasks
                .filter((task) => {
                    if (filter === "all") return true;
                    return task.status === filter;
                })
                .map((task) => (
                    <TaskCard
                    key={task.id}
                    task={task}
                    onEdit={() => {
                        setCurrentTask(task);
                        setIsModalOpen(true);
                    }}
                    onDelete={(taskId) => {
                        setTasks(tasks.filter((task) => task.id !== taskId));
                    }}
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
                <InputField
                label="Due Date"
                type="date"
                value={currentTask.dueDate}
                onChange={(value) => setCurrentTask({ ...currentTask, dueDate: value })}
                />
                <SelectField
                label="Status"
                value={currentTask.status}
                options={[
                    { value: "not started", label: "Not Started" },
                    { value: "in progress", label: "In Progress" },
                    { value: "completed", label: "Completed" },
                ]}
                onChange={(value) => setCurrentTask({ ...currentTask, status: value })}
                />
                <Button onClick={handleSaveTask}>Save</Button>
            </Modal>
        </div>
    );
};

export default TaskList;

