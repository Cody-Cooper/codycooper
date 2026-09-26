import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";
import { allPages, allPosts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = allPages.map((page) => ({
    url: `${siteUrl}/${page.slugAsParams}`,
  }));

  const posts = allPosts.map((post) => ({
    url: `${siteUrl}${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    { url: siteUrl },
    { url: `${siteUrl}/newsletter` },
    { url: `${siteUrl}/no` },
    ...pages,
    ...posts,
  ];
}
