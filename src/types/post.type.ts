export type Author = {
  id: string;
  slug: string;
  avatar: string;
};

export type FeaturedPost = {
  id: string;
  title: string;
  content: any; // TODO: get rid of any
  readTime: string;
  tag: string;
  author: Author;
  thumbnail: string;
  createdAt: Date;
  updatedAt: Date;
  isMain: true;
};

export type SecondaryPost = {
  id: string;
  title: string;
  thumbnail: string;
  tag: string;
  isMain?: false;
};

export type Post = Omit<FeaturedPost, "isMain">;
