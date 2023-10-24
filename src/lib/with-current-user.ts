import { NextRequest } from "next/server";
import verifyToken from "@/utils/verify-token";
import prisma from "@/db";
import { User } from "@/types";

const withCurrentUser = async (
  request: NextRequest,
  callback: (user?: User) => Promise<Response>,
) => {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return callback();
  }

  const { userId } = verifyToken(token);

  if (!userId) {
    return callback();
  }

  try {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        id: userId,
      },
    });

    return callback(user);
  } catch (e) {
    return callback();
  }
};

export default withCurrentUser;
