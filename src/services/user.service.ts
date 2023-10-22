import GenericService from "@/services/generic.service";
import { SerializedUser } from "@/types";
import AppFetch from "@/lib/app-fetch";

class UserService extends GenericService {
  constructor() {
    super();
  }

  async getCurrentUser(): Promise<SerializedUser | null> {
    try {
      const appFetch = AppFetch.getInstance();

      return await appFetch.request("/users/me", {
        cache: "no-store",
      });
    } catch (e) {
      return null;
    }
  }
}

export const userService = new UserService();
