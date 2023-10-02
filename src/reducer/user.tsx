import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { login, signUp } from "../actions/user";
import store from "../store/store";

export interface User {
    email: string;
    nickname: string;
    password: string;
    isLogin?: boolean;
    error?: string | unknown;
}
const initialState: User = {
    email: "",
    nickname: "",
    password: "",
    isLogin: true,
    error: "",
};

export interface UserLogin {
    email: string;
    password: string;
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signUp.pending, (state, action) => {
            state.isLogin = true;
        });
        builder.addCase(signUp.fulfilled, (state, action) => {
            state = action.payload;
            state.isLogin = false;
        });
        builder.addCase(signUp.rejected, (state, action) => {
            state.isLogin = false;
            state.error = action.payload;
        });

        builder.addCase(login.pending, (state, action) => {
            state.isLogin = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state = action.payload;
            state.isLogin = false;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.error = action.payload;
            state.isLogin = false;
        });
    },
});

export default userSlice.reducer;
