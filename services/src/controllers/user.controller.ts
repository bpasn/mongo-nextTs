import { Request, Response } from "express";
import { CreateUserInput } from "../Scheme/user.scheme";
import { createUser } from "../services/user.service";
import sendEmail from "../utils/mailer";

export async function creatrUserHandler(
    req: Request<{}, {}, CreateUserInput>,
    res: Response) {

    const body = req.body.body
    try {
        const user = await createUser(body)
        await sendEmail({
            from:"test@gmail.com",
            to:user.email,
            subject:"Please verfify you account",
            text:`verification code ${user.verificationCode} . id`
        })
        res.json("User successfully created")
    } catch (error: any) {
        if (error.code === 11000) {
            return res.status(409).send("Action already exists")
        }
        return res.status(500).send(error)
    }
}