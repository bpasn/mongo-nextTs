import { createSessionHandler } from './../controllers/auth.controller';
import { createSessionSchema } from './../Scheme/auth.scheme';
import express from "express";
import validateResource from "../middlewares/validateResource";

const router = express.Router();
router.post("/api/session/test",(_,res) => {
    try {
        res.sendStatus(200)
    } catch (error) {
        res.json(error)
    }
})
router.post("/api/session", 
    validateResource(createSessionSchema),
    createSessionHandler
    )

export default router;