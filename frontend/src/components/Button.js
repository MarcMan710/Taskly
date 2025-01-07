// src/components/Button.js
// A button component with styling and optional loading state.
import React from "react";

const Button = ({ children, onClick, disabled = false, loading = false, className = "" }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={`btn ${className} ${loading ? "btn-loading" : ""}`}
        >
            {loading ? "Loading..." : children}
        </button>
    );
};

export default Button;
