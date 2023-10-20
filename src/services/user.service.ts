import GenericService from "@/services/generic.service";
import { SerializedUser } from "@/types";
import AppFetch from "@/lib/app-fetch";

class UserService extends GenericService {
  constructor() {
    super();
  }

  async findByUserId(userId: string): Promise<SerializedUser | null> {
    try {
      return await this.prisma.user.findFirstOrThrow({
        where: { id: userId },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });
    } catch (e) {
      return null;
    }
  }

  async getCurrentUser(): Promise<SerializedUser | null> {
    try {
      const appFetch = AppFetch.getInstance();

      const response = await appFetch.request("/users/me", {
        cache: "no-store",
      });
      const user = await response.json();

      if (user) return user;
      return null;
    } catch (e) {
      return null;
    }
  }
}

export const userService = new UserService();
