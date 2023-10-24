import { Post } from "@/types/post.type";

export type PostCardProps = {
  data: Post;
  size?: "sm" | "md" | "lg";
  actionFooter?: boolean;
};
