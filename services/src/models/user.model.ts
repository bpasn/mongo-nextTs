import { DocumentType, getModelForClass, modelOptions, pre, prop, Severity } from "@typegoose/typegoose";
import argon2 from "argon2";
import { nanoid } from "nanoid";

@pre<User>("save", async function () {
    if (!this.isModified("password")) {
        return;
    }

    const hash = await argon2.hash(this.password)

    this.password = hash;

    return;
})
@modelOptions({
    schemaOptions: {
        timestamps: true
    },
    options: {
        allowMixed: Severity.ALLOW
    }
})



export class User {
    @prop({ lowercase: true, required: true, unique: true })
    email: string;

    @prop({ required: true })
    firstName: string

    @prop({ required: true })
    lastName: string

    @prop({ required: true })
    password: string

    @prop({ required: true, default: () => nanoid() })
    verificationCode: string

    @prop()
    passwordResetCode: string | null

    @prop({ default: false })
    verified: string;


    async validatePassowrd(this: DocumentType<User>, candidatePassword: string) {
        try {
            return await argon2.verify(this.password, candidatePassword)
        } catch (error) {
            console.log(error)
            return false
        }
    }
}


const UserModel = getModelForClass(User)

export default UserModel