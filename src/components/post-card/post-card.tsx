"use client";

import { FC } from "react";
import { PostCardProps } from "@/components/post-card/post-card.type";
import Image from "next/image";
import postCardStyles from "./post-card.module.scss";
import Link from "next/link";
import { FiClock } from "react-icons/fi";
import PostCardTag from "@/components/post-card/atoms/post-card-tag";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { postService } from "@/services";
import { useToast } from "@/components/ui/use-toast";
import { revalidatePath } from "next/cache";

const PostCard: FC<PostCardProps> = ({ data, size = "lg", actionFooter }) => {
  const router = useRouter();
  const { toast } = useToast();

  const onEdit = () => router.push(`/profile/posts/${data.id}/edit`);

  const onDelete = () => {
    postService.delete(data.id).then(() => {
      toast({
        description: "Post deleted successfully",
      });
      revalidatePath("/profile/posts");
    });
  };

  return (
    <article
      className={cn(postCardStyles.post__card, {
        [postCardStyles.post__card__sm]: size === "sm",
        [postCardStyles.post__card__md]: size === "md",
        [postCardStyles.post__card__lg]: size === "lg",
      })}
    >
      <div className={postCardStyles.post__card__image__wrapper}>
        <Link href="/">
          <Image
            className={postCardStyles.post__card__image}
            src={data.thumbnail}
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
          <h3 className={postCardStyles.post__card__title}>{data.title}</h3>
        </Link>
        {/*<p className={postCardStyles.post__card__description}>{data.content}</p>*/}
        <div className={postCardStyles.post__card__footer}>
          <div className={postCardStyles.post__card__authors}>
            <Link
              className={postCardStyles.post__card__author}
              href={`/author/${data.author.slug}`}
            >
              <Image
                src={data.author.avatar}
                alt={data.author.slug}
                width={36}
                height={36}
              />
            </Link>
          </div>
          <div className={postCardStyles.post__card__read__time}>
            <FiClock />
            <span>{data.readTime}</span>
          </div>
        </div>
        <div className={postCardStyles.post__card__action__footer}>
          {actionFooter && (
            <div className="flex items-center gap-3 mt-3">
              <Button
                className="!rounded-sm flex-1"
                size="sm"
                variant="destructive"
                onClick={onDelete}
              >
                <Trash />
              </Button>
              <Button className="!rounded-sm flex-1" size="sm" onClick={onEdit}>
                <Edit />
              </Button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default PostCard;
