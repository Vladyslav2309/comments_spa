import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {AuthReducer} from "../components/auth/AuthReducer";

export const rootReducer = combineReducers({
    auth: AuthReducer
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});
