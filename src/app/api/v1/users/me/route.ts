import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import verifyToken from "@/utils/verify-token";
import prisma from "@/db";

export async function GET(request: NextRequest) {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { userId } = verifyToken(token);

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const user = await prisma.user.findFirstOrThrow({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return Response.json(user);
  } catch (e) {
    return new Response("User not found. Please try logging in again.", {
      status: 404,
    });
  }
}
