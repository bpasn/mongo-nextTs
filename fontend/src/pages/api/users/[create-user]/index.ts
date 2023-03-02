import { createUserHandler } from '@/controllers/user.controller';
import { User } from '@/models/user.model';
import connectionDB from '@/mongo/config/mongo.config';
import { IUser } from '@/redux/interface/user.interface';
import { CreateUserInput } from '@/scheme/user.schema';
import { findUserByEmail } from '@/services/user.service';
import type { NextApiRequest, NextApiResponse } from 'next'
import _ from 'lodash'
import mongoose from 'mongoose';
const create: CreateUserInput = {
    email: "joe@gmail.com",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirmation: "",
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IUser | any>
) {
    try {
        await connectionDB();
        const { method } = req
        if (method === 'POST') {
            const body = req.body as CreateUserInput
            const create = await createUserHandler(body, res)
            if (!_.isEmpty(create) && create.status == true) {
                return res.status(create.statusCode).json(create)
            }
            return res.status(create.statusCode).json(create)
        } else {
            res.status(404).json("Method not allow")
        }
    } catch (error) {
        res.status(500).json({ error: error })
    }
}


