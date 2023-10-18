import { cookies } from "next/headers";
import verifyToken from "@/utils/verify-token";
import { userService } from "@/services";

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

    return await userService.findByUserId(userId);
  }

  return {
    isAuth: false,
  };
};
