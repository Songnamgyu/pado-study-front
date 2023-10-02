import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, UserLogin } from "../reducer/user";
import { create } from "domain";

interface UserAttributes {
    email: string;
    password: string;
    nickname: string;
}

interface UserLoginAttributes {
    email: string;
    password: string;
    nickName?: string;
}

export const signUp = createAsyncThunk<User, UserAttributes>(
    "/user/signUp",
    async (data, thunkApi) => {
        try {
            const response = await axios.post("/auth/signup", data);
            return thunkApi.fulfillWithValue(response.data);
        } catch (error) {
            console.log(error);
            return thunkApi.rejectWithValue(error);
        }
    }
);
export const login = createAsyncThunk<User, UserLoginAttributes>(
    "/user/login",
    async (data, thunkApi) => {
        try {
            const response = await axios.post("/auth/login", data);
            return thunkApi.fulfillWithValue(response.data);
        } catch (error) {
            console.log(error);
            return thunkApi.rejectWithValue(error);
        }
    }
);
