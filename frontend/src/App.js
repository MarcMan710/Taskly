// src/App.js
// The main component that renders the application.
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TaskList from "./pages/TaskList";
import NotFound from "./pages/NotFound";
import { useAuth } from "./hooks/useAuth";

const App = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                {!user ? (
                    <>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </>
                ) : (
                    <Route path="/tasks" element={<TaskList />} />
                )}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
