import { FeaturedPost, SecondaryPost } from "@/types/post.type";
import { uuid } from "@/utils";

export const featuredPosts: (FeaturedPost | SecondaryPost)[] = [
  {
    id: 1,
    title: "Never let your memories be greater than your dreams",
    content:
      "Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening. The wind had by this time backed to the east, and there was a shudder amongst the watchers on",
    thumbnailUrl: "/images/post-1.webp",
    authors: [
      {
        id: uuid(),
        avatar: "/images/author-1.jpg",
        slug: "john",
      },
      {
        id: uuid(),
        avatar: "/images/author-2.jpg",
        slug: "leo",
      },
    ],
    tag: "Travel",
    readTime: "3 min",
    isMain: true,
  },
  {
    id: 2,
    title: "Self-observation is the first step of inner unfolding",
    thumbnailUrl: "/images/post-2.webp",
    tag: "Lifestyle",
  },
  {
    id: 3,
    title:
      "The mind and body are not separate. what affects one, affects the other",
    thumbnailUrl: "/images/post-3.webp",
    tag: "Health",
  },
  {
    id: 4,
    title: "New tech innovation for low cost ocean cleanup",
    thumbnailUrl: "/images/post-4.webp",
    tag: "Technology",
  },
  {
    id: 5,
    title: "All the money in the world can't buy you back good health",
    thumbnailUrl: "/images/post-5.webp",
    tag: "Health",
  },
];
