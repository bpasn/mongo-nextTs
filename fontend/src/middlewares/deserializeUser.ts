import { verifyJwt } from "@/utils/jwt";
import { NextRequest, NextResponse } from "next/server";

export const deserilizeUser = async (
    req: NextRequest,
) => {
    try {
        const accessToken = (req.headers.get('authorization') || "")
            .replace(/^Bearer\s/, "");
        console.log("accessToken", accessToken)
        if (!accessToken) return null

        const decoded = verifyJwt(accessToken, "accessTokenPublicKey")

        // if (decoded) {
        //     res.locals.user = decoded
        // }
        if (decoded) {
            localStorage.setItem("user", JSON.stringify(decoded))
            return decoded

        }
        return null
    } catch (error) {
        let err = error as Error
        throw new Error(err.message);
    }
}
