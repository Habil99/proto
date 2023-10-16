import { FC } from "react";
import { PostCardTagType } from "@/components/post-card/atoms/post-card-tag.type";
import postCardStyles from "../post-card.module.scss";

const PostCardTag: FC<PostCardTagType> = ({ label }) => {
  return <span className={postCardStyles.post__card__tag}>{label}</span>;
};

export default PostCardTag;
