import { IUser } from "../interface/user.interface";

interface IActionRequest {
    type: "SIGN_REQUEST";
    payload?: any
}

interface IActionSuccess {
    type: "SIGN_SUCCESS";
    payload?: IUser
}
interface IActionFail {
    type: "SIGN_FAIL";
    payload?: any
}

export type Action = IActionRequest | IActionSuccess | IActionFail;