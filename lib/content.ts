import {
  allPages as generatedPages,
  allPosts as generatedPosts,
} from "content-collections";

export const allPages = generatedPages;
export const allPosts = generatedPosts;

export function getPage(slug: string) {
  return allPages.find((item) => item.slugAsParams === slug) ?? null;
}

export function getPost(slug: string) {
  return allPosts.find((item) => item.slugAsParams === slug) ?? null;
}
