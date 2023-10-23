import { PrismaClient } from "@prisma/client";
import prisma from "@/db";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

class GenericService {
  protected prisma: PrismaClient;
  protected cookies: RequestCookie[] | null;

  constructor() {
    this.prisma = prisma;
    this.cookies = null;
  }

  setCookies(cookies: RequestCookie[]) {
    this.cookies = cookies;
    return this;
  }
}

export default GenericService;
