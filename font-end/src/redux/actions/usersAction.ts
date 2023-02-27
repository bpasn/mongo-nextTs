import axios from "axios";
import { AppDispatch, RootState } from "../Store";

export function userAction(email: string, password: string) {
    return async (dispatch: AppDispatch, getState: RootState) => {
        dispatch({ type: "ACTION_REQUEST" })
        try {
            const { data } = await axios.post('api/auth', { email, password })
            console.log(data);

            // dispatch({ type: "ACTION_SUCCESS", payload: { username: "SUCCESS", status: true } })
        } catch (error) {
            dispatch({ type: "ACTION_FAIL", payload: error })
            return error instanceof Error && error.message
        }
    }
}