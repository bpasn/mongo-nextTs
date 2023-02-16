import { object, string, TypeOf } from 'zod'

export const createUserSchema = object({
    body: object({
        firstName: string({
            required_error: "First name is require"
        }),
        lastName: string({
            required_error: "First name is require"
        }),
        password: string({
            required_error: "password is require"
        }).min(6, "Password is to short - should be min 6 chars"),
        passwordConfirmation: string({
            required_error: "confirm passowrd is require"
        }),
        email: string({
            required_error: "Email is require"
        }).email("Not a valid email"),
    }).refine((data: any) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ['passwordConfirmation']
    })
});


export type CreateUserInput = TypeOf<typeof createUserSchema>