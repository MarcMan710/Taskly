// src/pages/NotFound.js
// A fallback page for undefined routes.
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="not-found">
            <h2>Page Not Found</h2>
            <Button onClick={() => navigate("/")}>Go Back to Home</Button>
        </div>
    );
};

export default NotFound;
