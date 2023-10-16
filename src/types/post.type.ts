export type AuthorType = {
  slug: string;
  imagePath: string;
};

export type FeaturedPostType = {
  id: string | number;
  title: string;
  description: string;
  readTime: string;
  tag: string;
  authors: AuthorType[];
  imagePath: string;
  isMain: true;
};

export type SecondaryPostType = {
  id: number;
  title: string;
  imagePath: string;
  tag: string;
  isMain?: false;
};

export type PostType = Omit<FeaturedPostType, "isMain">;
