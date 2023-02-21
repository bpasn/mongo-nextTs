import { Request, Response, NextFunction } from "express";

const requireUser = (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;
    if (!user) {
        return res.status(401).json({
            code:401,
            message:"Unauthorizetion",
        });
    }

    return next();
};

export default requireUser;
