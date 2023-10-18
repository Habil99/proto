import { FC } from "react";
import { PostCardProps } from "@/components/post-card/post-card.type";
import Image from "next/image";
import postCardStyles from "./post-card.module.scss";
import Link from "next/link";
import { FiClock } from "react-icons/fi";
import PostCardTag from "@/components/post-card/atoms/post-card-tag";

const PostCard: FC<PostCardProps> = ({ data }) => {
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
        <Link href="/">
          <PostCardTag label={data.tag} />
        </Link>
        <Link href="/">
          <h3>{data.title}</h3>
        </Link>
        <p className={postCardStyles.post__card__description}>
          {data.description}
        </p>
        <div className={postCardStyles.post__card__footer}>
          <div className={postCardStyles.post__card__authors}>
            {data.authors.map((author) => (
              <Link
                className={postCardStyles.post__card__author}
                href={`/author/${author.slug}`}
                key={author.slug}
              >
                <Image
                  src={author.imagePath}
                  alt={author.slug}
                  width={36}
                  height={36}
                />
              </Link>
            ))}
          </div>
          <div className={postCardStyles.post__card__read__time}>
            <FiClock />
            <span>{data.readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
