import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && (
            <p>
              <i>
                {post.date && new Date(post.date).toLocaleDateString("en-US")}
              </i>{" "}
              - {post.description}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}
