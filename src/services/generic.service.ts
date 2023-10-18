import { PrismaClient } from "@prisma/client";
import prisma from "@/db";

class GenericService {
  protected prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }
}

export default GenericService;
