import { combineReducers } from "redux";
import userSlice from "../reducer/user";

export default combineReducers({
    user: userSlice,
});
