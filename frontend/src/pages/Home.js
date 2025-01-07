// src/pages/Home.js
// The landing page introducing the app.
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home">
            <Header />
            <main>
                <h1>Welcome to Task Manager</h1>
                <p>Manage your tasks efficiently and stay organized.</p>
                <Button onClick={() => navigate("/login")}>Get Started</Button>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
