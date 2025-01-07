// src/context/AuthContext.js
// Context to manage authentication state globally.
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Simulate fetching user data on app load
    useEffect(() => {
        const loadUser = async () => {
            try {
                const token = localStorage.getItem("authToken");
                if (token) {
                    const response = await api.get("/auth/me", {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    setUser(response.data);
                }
            } catch (error) {
                console.error("Failed to fetch user:", error);
                localStorage.removeItem("authToken");
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, []);

    const login = async (credentials) => {
        try {
            const response = await api.post("/auth/login", credentials);
            localStorage.setItem("authToken", response.data.token);
            setUser(response.data.user);
            navigate("/dashboard");
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
