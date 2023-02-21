import { NextFunction, Request, Response } from "express";
import { verifyJwt } from "../utils/jwt";
import { decode } from "punycode";

const deserilizeUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const accessToken = (req.headers.authorization || "")
            .replace(/^Bearer\s/, "");
        if (!accessToken) return next()

        const decoded = verifyJwt(accessToken, "accessTokenPublicKey")

        if (decoded) {
            res.locals.user = decoded
        }
        return next()
    } catch (error) {
        let err = error as Error
        throw new Error(err.message);
    }
}

export default deserilizeUser;