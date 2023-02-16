import { NextFunction, Request, Response } from "express"

import { AnyZodObject } from "zod"

const validateResource = 
(schema: AnyZodObject) => 
(
    req: Request, 
    res: Response, 
    next: NextFunction
    ) => {
    try {
        console.log("THIS")
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        });
        next()
    } catch (error) {
        return res.status(400).json({ error:  error instanceof Error && JSON.parse(error.message) })
    }
}

export default validateResource