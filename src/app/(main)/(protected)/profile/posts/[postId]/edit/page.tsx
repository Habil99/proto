import { postService } from "@/services";
import { cookies } from "next/headers";
import { PostForm } from "@/components";

export default async function PostEditPage({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  const cookieStore = cookies();

  const post = await postService
    .setCookies(cookieStore.getAll())
    .findById(params.postId);

  if (!post) {
    return <div>Not found</div>;
  }

  return <PostForm post={post} />;
}
