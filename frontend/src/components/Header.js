// src/components/Header.js
// A top navigation bar with login/logout controls.
import React from "react";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <header className="header">
            <h1>Task Manager</h1>
            {user ? (
                <div className="user-controls">
                    <span>{user.name}</span>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <span>Please log in</span>
            )}
        </header>
    );
};

export default Header;
