// src/pages/Login.js
// The login page for user authentication.
import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Login = () => {
    const { login } = useAuth();
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            await login(credentials);
        } catch (err) {
            setError("Invalid email or password.");
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <InputField
                label="Email"
                value={credentials.email}
                onChange={(value) => setCredentials({ ...credentials, email: value })}
                type="email"
            />
            <InputField
                label="Password"
                value={credentials.password}
                onChange={(value) => setCredentials({ ...credentials, password: value })}
                type="password"
            />
            {error && <p className="error">{error}</p>}
            <Button onClick={handleLogin}>Login</Button>
        </div>
    );
};

export default Login;
