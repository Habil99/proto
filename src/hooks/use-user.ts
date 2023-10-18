import { cookies } from "next/headers";
import verifyToken from "@/utils/verify-token";
import prisma from "@/db";

type UseUser =
  | {
      success: true;
      user: any;
    }
  | {
      success: false;
      error: any;
    }
  | {
      isAuth: false;
    };

export const useUser = async (): Promise<UseUser> => {
  const token = cookies().get("token")?.value;
  if (token) {
    const tokenPayload = verifyToken(token);
    const userId = tokenPayload.userId;

    try {
      const user = await prisma.user.findFirst({
        where: { id: userId },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });

      return {
        user,
        success: true,
      };
    } catch (e) {
      return {
        success: false,
        error: e,
      };
    }
  }

  return {
    isAuth: false,
  };
};
