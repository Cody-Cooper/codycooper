export type EditUrlFunction = (fileName: string) => string;
export type DiscussUrlFunction = (slug: string) => string;
export interface Post {
  title: string;
  description?: string;
  body: {
    code: string;
  };
  slug: string;
  date: string;
  slugAsParams: string;
}