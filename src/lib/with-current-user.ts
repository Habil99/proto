import { NextRequest } from "next/server";
import verifyToken from "@/utils/verify-token";
import prisma from "@/db";
import { User } from "@/types";

const withCurrentUser = async (
  request: NextRequest,
  callback: (request: NextRequest, user?: User) => Promise<Response>,
) => {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return callback(request);
  }

  const { userId } = verifyToken(token);

  if (!userId) {
    callback(request);
  }

  try {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        id: userId,
      },
    });

    return callback(request, user);
  } catch (e) {
    return callback(request);
  }
};

export default withCurrentUser;
