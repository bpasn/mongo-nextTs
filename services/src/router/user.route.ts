import express from 'express'

import validateResource from '../middlewares/validateResource'

import { createUserSchema, forgotPasswordSchema, resetPasswordSchema, verifyUserSchema } from '../Scheme/user.scheme'
import { creatrUserHandler, forgotPassowrdHandler, getCurrentUserHandler, resetPasswordHandler, testSendEmail, verifyUserHandler } from '../controllers/user.controller'
import requireUser from '../middlewares/requireUser'

const router = express.Router()

//regisUser
router.post('/api/users',
    validateResource(createUserSchema),
    creatrUserHandler)

//verifyUser
router.post('/api/users/verify/:id/:verificationCode',
    validateResource(verifyUserSchema),
    verifyUserHandler)

//forgorPassword of User
router.post('/api/users/forgotpassword',
    validateResource(forgotPasswordSchema),
    forgotPassowrdHandler)

    //resetPassword
router.post("/api/users/resetpasswoed/:id/:passwordResetCode",
    validateResource(resetPasswordSchema),
    resetPasswordHandler
)

//
router.post('/api/users/email-test', validateResource(createUserSchema), testSendEmail)


router.get("/api/users/me", requireUser, getCurrentUserHandler);

export default router