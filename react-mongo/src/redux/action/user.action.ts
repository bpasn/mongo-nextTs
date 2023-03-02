
import { AppDispatch } from "../store"
import Helper from "@/utils/error.util"
const helper = new Helper();
const signIn = () => (dispatch: AppDispatch) => {
    dispatch({ type: "" })
    try {
    } catch (error) {
        helper.setMessage(error).report()
    }
}

export {
    signIn
}