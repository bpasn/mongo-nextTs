"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        firstName: (0, zod_1.string)({
            required_error: "First name is require"
        }),
        lastName: (0, zod_1.string)({
            required_error: "First name is require"
        }),
        password: (0, zod_1.string)({
            required_error: "password is require"
        }).min(6, "Password is to short - should be min 6 chars"),
        passwordConfirmation: (0, zod_1.string)({
            required_error: "confirm passowrd is require"
        }),
        email: (0, zod_1.string)({
            required_error: "Email is require"
        }).email("Not a valid email"),
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ['passwordConfirmation']
    })
});
