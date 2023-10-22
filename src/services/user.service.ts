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
