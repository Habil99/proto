export type AuthorType = {
  slug: string;
  imagePath: string;
};

export type PostType = {
  title: string;
  description: string;
  readTime: string;
  tag: string;
  authors: AuthorType[];
  imagePath: string;
};
