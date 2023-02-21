import { Request, Response } from "express";
import { CreateUserInput, VerifyUserInput, ForgotPasswordInput, ResetPasswordInput } from "../Scheme/user.scheme";
import { createUser, findUserByEmail, findUserById } from "../services/user.service";
import sendEmail from "../utils/mailer";
import { nanoid } from "nanoid";
import config from 'config'


export async function creatrUserHandler(
    req: Request<{}, {}, CreateUserInput>,
    res: Response) {
    const body = req.body
    try {
        const user = await createUser(body)
        await sendEmail({
            from: "test@gmail.com",
            to: user.email,
            subject: "Please verfify you account",
            text: `verification code ${user.verificationCode} . id : ${user._id}`
        })

        res.status(200).json("User successfully created")
    } catch (error: any) {
        console.log("EroroUsercontroller => ", error)
        if (error.code === 11000) {
            return res.status(409).send("Action already exists")
        }
        return res.status(500).send(error)
    }
}

export const testSendEmail = async (req: Request, res: Response) => {
    try {
        const mockMail = config.get<{
            from: string,
            to: string,
            subject: string,
            text: string
        }>('mockMail');

        await sendEmail({
            from: mockMail.from,
            to: mockMail.to,
            subject: mockMail.subject,
            text: mockMail.text
        })

        res.status(200).json("Send email successfully")
    } catch (error) {
        res.status(500).json(error instanceof Error && error.message)
    }
}

export async function verifyUserHandler(req: Request<VerifyUserInput>, res: Response) {
    try {
        const id: string = req.params.id
        const verificationCode: string = req.params.verificationCode
        console.log(req.params)
        const user = await findUserById(id)
        console.log(user)
        if (!user) {
            return res.status(400).json('Could not verify user')
        }

        // if (user.verified) {
        //     return res.status(400).json('User is already verified')
        // }
        // if (user.verificationCode === verificationCode) {
        //     user.verified = true;
        //     await user.save()
        //     return res.status(200).json("User successfully veridied")
        // }

        return res.status(200).json('cound not verify user')
    } catch (error) {
        console.log("verifyUserHandler error", error)
        res.status(500).json(error instanceof Error && JSON.parse(error.message))
    }
}

export const forgotPassowrdHandler = async (req: Request<{}, {}, ForgotPasswordInput>, res: Response) => {
    try {
        const message = "If a user with that email is registered you will creive a password reset email"

        const { email } = req.body

        const user = await findUserByEmail(email);

        if (!user) return res.status(404).json(message)


        // if (!user.verified) return res.status(404).json('User is not verified');

        const passwordResetCode = nanoid();

        user.passwordResetCode = passwordResetCode;

        await user.save();


        await sendEmail({
            to: user.email,
            from: "test@xample.com",
            subject: "Reset to password",
            text: `Password reset code: ${passwordResetCode}. Id ${user._id}`
        });

        return res.status(400).json(message)

    } catch (error) {
        console.log("forgotPassowrdHandler ", error)
    }
}


export const resetPasswordHandler = async (req: Request<ResetPasswordInput['params'], {}, ResetPasswordInput['body']>, res: Response) => {
    try {
        const { id, passwordResetCode } = req.params

        const { password } = req.body


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

export const getCurrentUserHandler = async (_: Request, res: Response) => {
    res.status(200).json(res.locals.user)
}
