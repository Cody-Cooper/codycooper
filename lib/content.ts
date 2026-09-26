import {
  allPages as generatedPages,
  allPosts as generatedPosts,
} from "content-collections";

export const allPages = generatedPages;
export const allPosts = generatedPosts;

export type PageDocument = (typeof allPages)[number];
export type PostDocument = (typeof allPosts)[number];

export function getPage(slug: string) {
  return allPages.find((item) => item.slugAsParams === slug) ?? null;
}

export function getPost(slug: string) {
  return allPosts.find((item) => item.slugAsParams === slug) ?? null;
}
