import Banner from "@/app/components/banner/banner";
import FeaturedPostType from "@/app/components/featured-post/featured-post";
import PopularTag from "@/app/components/popular-tag/popular-tag";
import { Posts } from "@/components";
import { PostType } from "@/types";
import { uuid } from "@/utils";

export const metadata = {
  title: "Proto",
  description: "Proto - Blog By Habil",
};

const posts: PostType[] = [
  {
    id: uuid(),
    tag: "Health",
    title:
      "The mind and body are not separate. what affects one, affects the other.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    imagePath: "/images/post-7.webp",
    authors: [
      {
        imagePath: "/images/author-1.jpg",
        slug: "author-1",
      },
    ],
    readTime: "5 min",
  },
];

export default function Home() {
  return (
    <main className="">
      <Banner />
      <FeaturedPostType />
      <PopularTag />
      <Posts posts={posts} />
    </main>
  );
}
