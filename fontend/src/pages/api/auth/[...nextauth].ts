import { IResponseMessage } from '@/interface/response'
import { User } from '@/models/user.model'
import connectionDB from '@/mongo/config/mongo.config'
import { CreateUserInput } from '@/scheme/user.schema'
import { verifyJwt } from '@/utils/jwt'
import axios from 'axios'
import { verify } from 'jsonwebtoken'
import NextAuth, { Account, AuthOptions, DefaultSession, Profile, Session } from 'next-auth'
import { AdapterUser } from 'next-auth/adapters'
import { JWT } from 'next-auth/jwt'
import CredentialsContainer, { CredentialInput } from 'next-auth/providers/credentials'

const authOption: AuthOptions = {
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, user, account }: {
            token: JWT;
            user?: User | AdapterUser | undefined | any;
            account?: Account | null | undefined;
            profile?: Profile | undefined;
            isNewUser?: boolean | undefined;
        }) {
            if (account && user) {
                console.log({ user, account })
                return {
                    ...token,
                    accessToken: user?.accessToken,
                    refreshToken: user?.refreshToken,
                };
            }

            return token;
        },

        async session({ session, token }: { session: Session | any, token: JWT }): Promise<Session | undefined | any> {
            console.log({ session, token })
            session.user.accessToken = token.accessToken;
            session.user.refreshToken = token.refreshToken;
            session.user.accessTokenExpires = token.accessTokenExpires;
            return session;
        },
    },
    providers: [
        CredentialsContainer({
            credentials: {
                // firstName: { label: "Username", type: "text", placeholder: "jsmith" },
                // lastName: { label: "Password", type: "password" },
                email: { label: "Password", type: "password" },
                password: { label: "Password", type: "password" },
                // passwordConfirmation: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const { data: session } = await axios.post('/api/session/login', JSON.stringify({
                    email: credentials?.email,
                    password: credentials?.password,
                }));
                console.log("{session}")

                if (session.ok) {
                    const decode: any = verifyJwt(session.accessToken, 'accessTokenPublicKey')
                    console.log(decode)
                    return decode;
                } else {
                    throw new Error(session.message);
                }

                // Return null if user data could not be retrieved
                return null;
            },
        })
    ]
}

export default NextAuth(authOption)