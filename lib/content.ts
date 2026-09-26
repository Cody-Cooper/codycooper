import {
  allPages as generatedPages,
  allPosts as generatedPosts,
} from "content-collections";

export const allPages = generatedPages;
// Keep the index and adjacent-article links in the same newest-first order.
export const allPosts = [...generatedPosts].sort(
  (a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug)
);

export type PostDocument = (typeof allPosts)[number];

export function getPage(slug: string) {
  return allPages.find((item) => item.slugAsParams === slug) ?? null;
}

export function getPost(slug: string) {
  return allPosts.find((item) => item.slugAsParams === slug) ?? null;
}
