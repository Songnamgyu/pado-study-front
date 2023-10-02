import React, { useEffect, useState } from "react";
import "./App.css";
import LoginForm from "./login/LoginForm";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./login/SignUp";
import CommonHeader from "./components/CommonHeader";

function App() {
    const [message, setMessage] = useState("");
    useEffect(() => {
        fetch("/auth/test")
            .then((res) => res.text())
            .then((message) => setMessage(message));
    }, []);

    return (
        <div className="App">
            <CommonHeader />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/login/SignUp" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
