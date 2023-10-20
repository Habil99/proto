import { cookies } from "next/headers";
import verifyToken from "@/utils/verify-token";
import { userService } from "@/services";
import { SerializedUser } from "@/types";

export const useUser = async (): Promise<SerializedUser | null> => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (token) {
    const tokenPayload = verifyToken(token);
    const userId = tokenPayload.userId;

    return await userService.findByUserId(userId);
  }

  return null;
};
