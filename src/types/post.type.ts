export type Author = {
  id: string;
  slug: string;
  avatar: string;
};

export type FeaturedPost = {
  id: string | number;
  title: string;
  content: string;
  readTime: string;
  tag: string;
  authors: Author[];
  thumbnailUrl: string;
  isMain: true;
};

export type SecondaryPost = {
  id: number;
  title: string;
  thumbnailUrl: string;
  tag: string;
  isMain?: false;
};

export type Post = Omit<FeaturedPost, "isMain">;
