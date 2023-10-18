export type Author = {
  slug: string;
  imagePath: string;
};

export type FeaturedPost = {
  id: string | number;
  title: string;
  description: string;
  readTime: string;
  tag: string;
  authors: Author[];
  imagePath: string;
  isMain: true;
};

export type SecondaryPost = {
  id: number;
  title: string;
  imagePath: string;
  tag: string;
  isMain?: false;
};

export type Post = Omit<FeaturedPost, "isMain">;
