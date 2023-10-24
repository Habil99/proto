import { postService } from "@/services";
import { cookies } from "next/headers";
import PostCard from "@/components/post-card/post-card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { BiBookAdd } from "react-icons/bi";

export const dynamic = "force-dynamic";

export default async function PostsPage() {
  const cookieStore = cookies();
  const posts = await postService.setCookies(cookieStore.getAll()).getAll();

  return (
    <div>
      <div className="flex items-center justify-end mb-4">
        <Link
          className={buttonVariants({
            variant: "primary",
          })}
          href="/profile/posts/create"
        >
          Write new story
          <BiBookAdd className="ml-2" />
        </Link>
      </div>
      {posts?.length ? (
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(240px,_1fr))]">
          {posts?.map((post) => (
            <PostCard data={post} size="md" key={post.id} actionFooter />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center my-24 justify-center">
          <h4>You have no posts yet.</h4>
          <p>No worries, you can create one by clicking the button above.</p>
        </div>
      )}
    </div>
  );
}
