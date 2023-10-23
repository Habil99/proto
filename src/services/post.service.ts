import GenericService from "@/services/generic.service";
import AppFetch from "@/lib/app-fetch";
import { User } from "@/types";

class PostService extends GenericService {
  constructor() {
    super();
  }

  async getAll(): Promise<
    | {
        id: string;
        title: string;
        thumbnail: string;
        content: any[];
        authorId: string;
        author: User;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
      }[]
    | null
  > {
    const appFetch = AppFetch.getInstance(this.cookies);

    try {
      return await appFetch.request("/posts/mine", {
        cache: "no-store",
      });
    } catch (e) {
      return null;
    }
  }
}

export const postService = new PostService();
