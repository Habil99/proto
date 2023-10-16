import { FC } from "react";
import { PostsPropsType } from "@/components/posts/posts.type";
import PostCard from "@/components/post-card/post-card";
import postsStyles from "./posts.module.scss";

export const Posts: FC<PostsPropsType> = ({ posts }) => {
  return (
    <div className={postsStyles.posts__wrapper}>
      {posts.map((post) => (
        <PostCard data={post} key={post.id} />
      ))}
    </div>
  );
};
