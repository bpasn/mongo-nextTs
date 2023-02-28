import axios from "axios";
import { AppDispatch, RootState } from "../Store";
import { IUser } from "../interface/user.interface";

export function userAction(email: string, password: string) {
    return async (dispatch: AppDispatch, getState: RootState) => {
        dispatch({
            type: "SIGN_REQUEST",
        })
        try {
            const { data } = await axios.post('api/auth', { email, password })
            dispatch({ type: "SIGN_SUCCESS", payload: data as IUser })
        } catch (error) {
            dispatch({ type: "SIGN_FAIL", payload: error })
            return error instanceof Error && error.message
        }
    }
}