import { DocumentType } from "@typegoose/typegoose";
import { omit } from "lodash";
import { privateFields, User } from "../models/user.model";
import { signJwt } from "../utils/jwt";
import { findUserById } from "./user.service";
import config from "config";
import SessionModel from "@/models/session.models";

export async function createSession({ userId }: { userId: string }) {
  return SessionModel.create({ user: userId });
}

export async function findSessionById(id: string) {
  return SessionModel.findById(id);
}

export async function signRefreshToken({ userId }: { userId: string }) {
  const session = await createSession({
    userId,
  });

  const refreshToken = signJwt(
    {
      session: session._id,
    },
    "refreshTokenPrivateKey",
    {
      expiresIn: "1y",
    }
  );

  return refreshToken;
}

export function signAccessToken(user: DocumentType<User>) {
  const payload = omit(user.toJSON(), privateFields);
  const accessToken = signJwt(payload, "accessTokenPrivateKey", {
    expiresIn: "30s",
  });

  return accessToken;
}
