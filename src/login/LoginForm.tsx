import React, { useState } from "react";
import {} from "@reduxjs/toolkit";
import { Link, Routes, useNavigate, useRoutes } from "react-router-dom";
import SignUp from "./SignUp";
import { useDispatch } from "react-redux";
import {
    Button,
    FormControl,
    FormHelperText,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { login } from "../actions/user";
import { AppDispatch } from "../store/store";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };
    const dispatch = useDispatch<AppDispatch>();

    const handlerLogin = () => {
        const data = {
            email,
            password,
        };
        console.log(data);
        dispatch(login(data));
    };
    return (
        <div className="login-form">
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="standard-adornment-id"
                    startAdornment={
                        <InputAdornment position="start">ID</InputAdornment>
                    }
                    aria-describedby="standard-id-helper-text"
                    inputProps={{
                        "aria-label": "id",
                    }}
                />
            </FormControl>
            <br />
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                    Password
                </InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <div className="btn-group">
                <Button
                    variant="contained"
                    className="login-btn"
                    onClick={handlerLogin}
                >
                    로그인
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    className="signup-btn"
                    onClick={() => navigate("/login/Signup")}
                >
                    회원가입
                </Button>
            </div>
        </div>
    );
};
export default LoginForm;
