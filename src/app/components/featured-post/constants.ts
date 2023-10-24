import { FeaturedPost, SecondaryPost } from "@/types/post.type";
import { uuid } from "@/utils";

export const featuredPosts: (FeaturedPost | SecondaryPost)[] = [
  {
    id: uuid(),
    title: "Never let your memories be greater than your dreams",
    content:
      "Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening. The wind had by this time backed to the east, and there was a shudder amongst the watchers on",
    thumbnail: "/images/post-1.webp",
    author: { id: uuid(), avatar: "/images/author-1.jpg", slug: "john" },
    tag: "Travel",
    readTime: "3 min",
    createdAt: new Date("2023-10-12"),
    updatedAt: new Date("2023-10-12"),
    isMain: true,
  },
  {
    id: uuid(),
    title: "Self-observation is the first step of inner unfolding",
    thumbnail: "/images/post-2.webp",
    tag: "Lifestyle",
  },
  {
    id: uuid(),
    title:
      "The mind and body are not separate. what affects one, affects the other",
    thumbnail: "/images/post-3.webp",
    tag: "Health",
  },
  {
    id: uuid(),
    title: "New tech innovation for low cost ocean cleanup",
    thumbnail: "/images/post-4.webp",
    tag: "Technology",
  },
  {
    id: uuid(),
    title: "All the money in the world can't buy you back good health",
    thumbnail: "/images/post-5.webp",
    tag: "Health",
  },
];
