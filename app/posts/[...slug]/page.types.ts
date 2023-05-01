export interface Post {
  slug: string;
  slugAsParams: string;
  title: string;
  description?: string;
  body: {
    code: string;
  };
  date: string;
}

export type EditUrlFunction = (postName: FileName) => string;

export type DiscussUrlFunction = (slug: string) => string;

export type FileName = string;

export interface PostProps {
  post: Post;
  fileName: FileName;
}
