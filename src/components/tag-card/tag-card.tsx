import { FC } from "react";
import { TagCardPropsTpe } from "@/components/tag-card/tag-card.type";
import Image from "next/image";
import Link from "next/link";

export const TagCard: FC<TagCardPropsTpe> = ({ data }) => {
  return (
    <Link
      href="/"
      className="p-3 flex items-center gap-3 bg-card-background-color rounded-3xl border border-solid border-border-color"
    >
      <Image
        className="rounded-full w-[64px] h-[64px] object-cover"
        src={data.imagePath}
        alt={data.title}
        width={64}
        height={64}
      />
      <div className="flex flex-col gap-1">
        <p className="text-xl font-bold leading-[1.2]">{data.title}</p>
        <span>{data.postCount} posts</span>
      </div>
    </Link>
  );
};
