import type { Metadata } from "next";
import Link from "next/link";

import { allPosts } from "@/.contentlayer/generated";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
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
    <div className="prose dark:prose-invert">
      <h1>Articles</h1>
      {sortedPosts.map((post) => (
        <article key={post._id}>
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
    </div>
  );
}
