import jwt from "jsonwebtoken";
import config from "config";

export function signJwt(
  object: Object,
  keyName: "accessTokenPrivateKey" | "refreshTokenPrivateKey",
  options?: jwt.SignOptions | undefined
) {
  const signingKey = Buffer.from(
    config.get<string>(keyName),
    "base64"
  ).toString("ascii");
console.log(signingKey.length)
console.log(options)
  const a = jwt.sign(object, signingKey, {
    ...(options && options),
    algorithm: "RS256",
  });
  console.log(a)
}

export function verifyJwt<T>(
  token: string,
  keyName: "accessTokenPublicKey" | "refreshTokenPublicKey"
): T | null {
  console.log("config.get<string>(keyName)" , config.get<string>(keyName))
  const publicKey = Buffer.from(config.get<string>(keyName), "base64").toString(
    "ascii"
  );

  try {
    const decoded = jwt.verify(token, publicKey) as T;
    return decoded;
  } catch (e) {
    return null;
  }
}
