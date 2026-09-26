import type { Metadata } from "next";
import Link from "next/link";

import { allPosts } from "@/lib/content";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Articles",
    images: [
      {
        url: "/api/og?title=Articles",
        width: 1200,
        height: 630,
        alt: "Articles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles",
    images: ["/api/og?title=Articles"],
  },
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function Home() {
  const sortedPosts = [...allPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <article className="prose py-6 dark:prose-invert">
      <h1 className="text-center">Articles</h1>
      {sortedPosts.map((post) => (
        <article key={post.slug}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && (
            <p>
              <i>{dateFormatter.format(new Date(post.date))}</i> -{" "}
              {post.description}
            </p>
          )}
        </article>
      ))}
    </article>
  );
}
