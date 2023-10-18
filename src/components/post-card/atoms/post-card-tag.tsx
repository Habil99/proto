import { FC } from "react";
import { PostCardTag } from "@/components/post-card/atoms/post-card-tag.type";
import postCardStyles from "../post-card.module.scss";

const PostCardTag: FC<PostCardTag> = ({ label }) => {
  return <span className={postCardStyles.post__card__tag}>{label}</span>;
};

export default PostCardTag;
