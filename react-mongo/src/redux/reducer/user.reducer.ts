import { Action } from "@/typing"

const userReducer = (state: UserSignIn = {}, action: Action) => {
    switch (action.type) {
        case "SIGN_REQUEST":
            return;
        case "SIGN_SUCCESS":
            return;
        case "SIGN_FAIL":
            return;
        default:
            return state
    }
}

export { userReducer }