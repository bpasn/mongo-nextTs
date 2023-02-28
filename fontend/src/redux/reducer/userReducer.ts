import { Action } from "@/redux/constract/user";
import { IUser } from "../interface/user.interface";

export const userReducer = (state: IUser | null, action: Action) => {
    switch (action.type) {
        case "SIGN_REQUEST":
            return { loading: true };
        case "SIGN_SUCCESS":
            return { loading: false, payload: { ...action.payload } };
        case "SIGN_FAIL":
            return {
                loading: false, error: {
                    ...state,
                    ...action.payload
                }
            };
        default:
            return state;
    }
}