import {
    Action,
    ThunkAction,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import rootReducer from "../reducer/index";
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
export default store;
