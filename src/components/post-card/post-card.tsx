import { FC } from "react";
import { PostCardPropsType } from "@/components/post-card/post-card.type";
import Image from "next/image";
import postCardStyles from "./post-card.module.scss";
import Link from "next/link";

const PostCard: FC<PostCardPropsType> = ({ data }) => {
  return (
    <article className={postCardStyles.post__card}>
      <div className={postCardStyles.post__card__image__wrapper}>
        <Link href="/">
          <Image
            className={postCardStyles.post__card__image}
            src={data.imagePath}
            alt={data.title}
            fill
            sizes="(max-width: 768px) 100vw, 750px"
          />
        </Link>
      </div>
      <div className={postCardStyles.post__card__body}>
        <Link
          style={{
            "--tag-color": "#E10689",
          }}
          className={postCardStyles.post__card__tag}
          href="/"
        >
          {data.tag}
        </Link>
        <Link href="/">
          <h3>{data.title}</h3>
        </Link>
        <p className={postCardStyles.post__card__description}>
          {data.description}
        </p>
      </div>
    </article>
  );
};

export default PostCard;
