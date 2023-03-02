import { Action } from "@/redux/constract/user";
import { IUser } from "../interface/user.interface";
import { PayloadAction } from "@reduxjs/toolkit";

export const userReducer = (state = {}, action: Action) => {
    console.log(action)
    switch (action.type) {
        case "SIGN_REQUEST":
            return { loading: true };
        case "SIGN_SUCCESS":
            return { loading: false, payload: { ...action.payload } };
        case "SIGN_FAIL":
            return {
                loading: false, error: action.payload
            };
        default:
            return state;
    }
}