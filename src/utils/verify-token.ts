import jwt, { JwtPayload } from "jsonwebtoken";

export default function verifyToken(token: string): JwtPayload | string {
  return jwt.verify(token, process.env.JWT_SECRET as string);
}
