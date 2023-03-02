import { createSessionHandler } from "@/controllers/auth.controller";
import connectionDB from "@/mongo/config/mongo.config";
import { CreateSessionInput } from "@/scheme/auth.scheme";
import { NextApiRequest, NextApiResponse } from "next";

const loginUser: CreateSessionInput = {
    email: "joe@gmail.com",
    password: "P@ssw0rd"
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        await connectionDB();
        console.log(req.body)
        // const body = req.body as CreateSessionInput
        const session = await createSessionHandler(loginUser, res);
        console.log(session)
        if (session) {
            res.status(200).json(session)
        }

    } catch (error) {
        res.status(500).json({
            status:false,
            message: error instanceof Error && error.message
        })
    }
}