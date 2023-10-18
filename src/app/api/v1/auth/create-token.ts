import jwt from "jsonwebtoken";

export default function createToken(userId: string): {
  token: string;
  expires: Date;
} {
  const EXPIRES_IN = 1000 * 60 * 60 * 24; // 1 day
  const expires = new Date(Date.now() + EXPIRES_IN);

  return {
    token: jwt.sign({ userId }, process.env.JWT_SECRET as string, {
      expiresIn: EXPIRES_IN,
    }),
    expires,
  };
}
