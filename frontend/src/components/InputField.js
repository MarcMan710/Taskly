// src/components/InputField.js
// An input field with validation support.
import React from "react";

const InputField = ({ label, value, onChange, type = "text", error = "", className = "" }) => {
    return (
        <div className={`input-field ${className}`}>
            {label && <label>{label}</label>}
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={error ? "input-error" : ""}
            />
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};

export default InputField;
