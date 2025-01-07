// src/pages/Register.js
// A page for user registration.
import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { api } from "../services/api";

const Register = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleRegister = async () => {
        try {
            await api.post("/auth/register", user);
            setSuccess(true);
        } catch (err) {
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <div className="register">
            <h2>Register</h2>
            <InputField
                label="Name"
                value={user.name}
                onChange={(value) => setUser({ ...user, name: value })}
            />
            <InputField
                label="Email"
                value={user.email}
                onChange={(value) => setUser({ ...user, email: value })}
                type="email"
            />
            <InputField
                label="Password"
                value={user.password}
                onChange={(value) => setUser({ ...user, password: value })}
                type="password"
            />
            {error && <p className="error">{error}</p>}
            {success && <p>Registration successful! You can now log in.</p>}
            <Button onClick={handleRegister}>Register</Button>
        </div>
    );
};

export default Register;
