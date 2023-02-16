import express, { Request, Response } from 'express'

import validateResource from '../middlewares/validateResource'

import { createUserSchema } from '../Scheme/user.scheme'
import { creatrUserHandler } from '../controllers/user.controller'

const route = express.Router()

route.post('/api/users',validateResource(createUserSchema), creatrUserHandler)
export default route