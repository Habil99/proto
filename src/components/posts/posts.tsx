import { FC } from "react";
import { PostsProps } from "@/components/posts/posts.type";
import PostCard from "@/components/post-card/post-card";
import postsStyles from "./posts.module.scss";
import { Button } from "@/components";

export const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <section className="my-12">
      <div className={postsStyles.posts__wrapper}>
        {posts.map((post) => (
          <PostCard data={post} key={post.id} />
        ))}
      </div>
      <div className="flex justify-center my-4">
        <Button variant="primary">Load more</Button>
      </div>
    </section>
  );
};
