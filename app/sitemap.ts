import type { MetadataRoute } from "next";

import { allPages, allPosts } from "@/lib/content";

const baseUrl = "https://codycooper.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = allPages.map((page) => ({
    url: `${baseUrl}/${page.slugAsParams}`,
  }));

  const posts = allPosts.map((post) => ({
    url: `${baseUrl}${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    { url: baseUrl },
    { url: `${baseUrl}/newsletter` },
    { url: `${baseUrl}/no` },
    ...pages,
    ...posts,
  ];
}
