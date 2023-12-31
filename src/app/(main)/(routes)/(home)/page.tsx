import Banner from "@/app/components/banner/banner";
import FeaturedPost from "@/app/components/featured-post/featured-post";
import PopularTag from "@/app/components/popular-tag/popular-tag";
import { Posts } from "@/components";
import { Post } from "@/types";
import { uuid } from "@/utils";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Proto",
  description: "Proto - Blog By Habil",
};

const posts: Post[] = [
  {
    id: uuid(),
    tag: "Health",
    title:
      "The mind and body are not separate. what affects one, affects the other.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    thumbnail: "/images/post-7.webp",
    author: {
      id: uuid(),
      avatar: "/images/author-1.jpg",
      slug: "author-1",
    },
    createdAt: new Date("2023-10-12"),
    updatedAt: new Date("2023-10-12"),
    readTime: "5 min",
  },
  {
    id: uuid(),
    tag: "Sport",
    title: "Football is the most popular sport in the world",
    content:
      "Football is the most popular sport in the world. It is played in almost every country, and is the most popular sport in the world.",
    thumbnail: "/images/post-8.webp",
    author: {
      id: uuid(),
      avatar: "/images/author-2.jpg",
      slug: "author-2",
    },
    createdAt: new Date("2023-10-12"),
    updatedAt: new Date("2023-10-12"),
    readTime: "4 min",
  },
  {
    id: uuid(),
    tag: "Fashion",
    title: "Fashion is a popular aesthetic expression",
    content:
      "Fashion is a popular aesthetic expression at a particular period and place and in a specific context, especially in clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body proportions.",
    thumbnail: "/images/post-9.webp",
    author: {
      id: uuid(),
      avatar: "/images/author-2.jpg",
      slug: "author-3",
    },
    createdAt: new Date("2023-10-12"),
    updatedAt: new Date("2023-10-12"),
    readTime: "3 min",
  },
];

export default function Home() {
  return (
    <main className="">
      <Banner />
      <FeaturedPost />
      <PopularTag />
      <Posts posts={posts} />
    </main>
  );
}
