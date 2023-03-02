import { CreateUserInput, VerifyUserInput, ForgotPasswordInput, ResetPasswordInput } from "@/scheme/user.schema";
import { createUser, findUserByEmail, findUserById } from "@/services/user.service";
import { nanoid } from "nanoid";
import config from 'config'
import { NextApiRequest, NextApiResponse } from "next";
import ResponseMessage, { IResponseMessage } from "../interface/response";
import { User } from "@/models/user.model";
const responseMessage = new ResponseMessage()

export async function createUserHandler(body: CreateUserInput, res: NextApiResponse): Promise<IResponseMessage> {
    try {
        const user = await createUser(body)
        console.log(user)
        if (user) {
            responseMessage.setResponse({ statusCode: 200, status: true, message: "User create successfully", payload: user as User })
        }else{
            responseMessage.setResponse({ statusCode: 400, status: false, message: "User not create" })
        }
    } catch (error: any) {
        if (error.code === 11000) {
            responseMessage.setResponse({ statusCode: 409, status: false, message: "Action already exists" })
        }
        return { statusCode: 500, status: false, message: "Action already exists" }
    }
    return responseMessage.getReport()
}

export async function verifyUserHandler(verify: VerifyUserInput, res: NextApiResponse) {
    try {
        const id: string = verify.id;
        const verificationCode: string = verify.verificationCode
        const user = await findUserById(id)
        console.log(user)
        if (!user) {
            return { status: 404, message: "Could not verify user" }
        }
        return res.status(200).json('cound not verify user')
    } catch (error) {
        console.log("verifyUserHandler error", error)
        res.status(500).json(error instanceof Error && JSON.parse(error.message))
    }
}

export const forgotPassowrdHandler = async (forgot: ForgotPasswordInput, res: NextApiResponse) => {
    try {
        const message = "If a user with that email is registered you will creive a password reset email"

        const { email } = forgot

        const user = await findUserByEmail(email);

        if (!user) return res.status(404).json(message)


        // if (!user.verified) return res.status(404).json('User is not verified');

        const passwordResetCode = nanoid();

        user.passwordResetCode = passwordResetCode;

        await user.save();
        return res.status(400).json(message)

    } catch (error) {
        console.log("forgotPassowrdHandler ", error)
        return error
    }
}

//<ResetPasswordInput['params'], {}, ResetPasswordInput['body']>
export const resetPasswordHandler = async (param: { id: string, passwordResetCode: string, password: string }, res: NextApiResponse) => {
    try {
        const { id, passwordResetCode, password } = param

        const user = await findUserById(id)

        if (!user ||
            !user.passwordResetCode ||
            user.passwordResetCode !== passwordResetCode) {
            return res.status(400).json("Could no reset user password");
        }

        user.passwordResetCode = null
        user.password = password;

        await user.save();

        return res.status(200).json("Successfully updated password")
    } catch (error) {
        console.log("resetPasswordHandler error ", error)
        res.status(500).json(error instanceof Error && error.message)
    }
}

export const getCurrentUserHandler = async (_: NextApiRequest, res: NextApiResponse) => {
    return res.status(200).json(res)
}

export const testController = async (_: NextApiRequest, res: NextApiResponse) => {
    try {
        res.send({ eiei: "eiei" })
    } catch (error) {
        res.status(500).send(error)
    }
}