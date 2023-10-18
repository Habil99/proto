import jwt from "jsonwebtoken";
import { TokenPayload } from "@/types/token.type";

type VerifyToken = TokenPayload;

export default function verifyToken(token: string): VerifyToken {
  return jwt.verify(token, process.env.JWT_SECRET as string) as VerifyToken;
}
