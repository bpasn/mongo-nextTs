import { createUserHandler, testController } from '@/controllers/user.controller';
import { CreateUserInput } from '@/scheme/user.schema';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name?: string,
    error?: string | undefined | null
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        // await connectionDB();
        await createUserHandler(<CreateUserInput>{
            firstName: "Joe",
            lastName: "Biden",
            email: "joebiden1@gmail.com",
            password: "P@ssw0rd",
            passwordConfirmation: "P@ssw0rd",
        }, res);
    } catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : '' })
    }
}


