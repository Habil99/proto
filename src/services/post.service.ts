import GenericService from "@/services/generic.service";
import AppFetch from "@/lib/app-fetch";
import { Post } from "@/types";

class PostService extends GenericService {
  constructor() {
    super();
  }

  async getAll(): Promise<Post[] | null> {
    const appFetch = AppFetch.getInstance(this.cookies);

    try {
      return await appFetch.request("/posts/mine", {
        cache: "no-store",
        next: {
          tags: ["posts"],
        },
      });
    } catch (e) {
      return null;
    }
  }

  async findById(id: string): Promise<Post | null> {
    const appFetch = AppFetch.getInstance(this.cookies);

    try {
      return await appFetch.request(`/posts/${id}`, {
        method: "GET",
        next: {
          tags: ["posts"],
        },
      });
    } catch (e) {
      return null;
    }
  }

  async createOrUpdate(
    postId: string | undefined,
    post: {
      title: string;
      content: any; // TODO: get rid of any
      published: boolean;
      thumbnail: File | null;
    },
  ) {
    let postThumbnailBase64: string | undefined;

    if (post.thumbnail && post.thumbnail instanceof File) {
      postThumbnailBase64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result as string);
        };
        reader.readAsDataURL(post.thumbnail!);
      });
    }

    const formData = new FormData();
    formData.append("title", post.title);
    formData.append("content", JSON.stringify(post.content));
    formData.append("publish", post.published ? "1" : "0");

    if (postThumbnailBase64) {
      formData.append("thumbnail", postThumbnailBase64);
    }

    const appFetch = AppFetch.getInstance(this.cookies);

    if (postId) {
      return await appFetch.request(`/posts/${postId}`, {
        method: "PUT",
        body: formData,
        next: {
          tags: ["posts"],
        },
      });
    } else {
      return await appFetch.request("/posts", {
        method: "POST",
        body: formData,
        next: {
          tags: ["posts"],
        },
      });
    }
  }

  async delete(id: string): Promise<boolean> {
    const appFetch = AppFetch.getInstance(this.cookies);

    try {
      await appFetch.request(`/posts/${id}`, {
        method: "DELETE",
        next: {
          tags: ["posts"],
        },
      });

      return true;
    } catch (e) {
      return false;
    }
  }
}

export const postService = new PostService();
