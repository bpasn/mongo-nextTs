import axios, { AxiosError } from "axios";
import { AppDispatch, RootState } from "../Store";
import { IUser } from "../interface/user.interface";
import { CreateUserInput } from "@/scheme/user.schema";
import { signIn } from "next-auth/react";

export function userAction(user: CreateUserInput) {
    return async (dispatch: AppDispatch, getState: RootState) => {
        dispatch({ type: "SIGN_REQUEST", })
        try {
            const { data } = await axios.post('api/users/create-user', user)
            if (data) {
                const result = await signIn('credentials', data.playload)
                if (result?.error) {
                    dispatch({ type: "SIGN_FAIL", payload: result?.error })
                }
                if (result?.ok) {
                    dispatch({ type: "SIGN_SUCCESS", payload: data.data as IUser })
                }
            }
        } catch (error: any) {
            dispatch({ type: "SIGN_FAIL", payload: error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message })
        }
    }
}
