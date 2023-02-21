import { ErrorHandle } from './../utils/ErrorHandlering';
import { signAccessToken, signRefreshToken } from './../services/auth.service';
import { findUserByEmail } from './../services/user.service';
import { Request, Response } from 'express';
import { CreateSessionInput } from './../Scheme/auth.scheme';
export const createSessionHandler = async (
    req: Request<{}, {}, CreateSessionInput>, res: Response
) => {
    try {
        const message = "Invalid email or password"
        const { email, password } = req.body
        const user = await findUserByEmail(email);

        if (!user) {
            return res.status(404).json(message)
        }

        // if (!user.verified) { return res.status(400).send("Plase verify your email") }


        const isValid = await user.validatePassowrd(password)
        if (!isValid) { return res.status(400).json(message) }

        //sign a access token
        const accessToken = signAccessToken(user)

        //sign arefresh token
        const refreshToken = await signRefreshToken({
            userId: user._id
        })

        return res.status(200).send({
            accessToken,
            refreshToken
        });
        //send th
    } catch (error) {
        console.log("ERROR AUTH CONTROLLER ", error instanceof Error && error.message)
        return res.status(500).send({
            error:"Internal server error",
            message:error instanceof Error && error.message,
            // stack: error instanceof Error && error.stack,
        })
    }

}