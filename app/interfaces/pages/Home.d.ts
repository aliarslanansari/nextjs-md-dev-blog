export interface FrontMatter {
  cover_image: string;
  date: string;
  excerpt: string;
  title: string;
}

export interface IPost {
  slug: string;
  frontMatter: FrontMatter;
}

export interface IPostWithContent extends IPost {
  content: string;
}
