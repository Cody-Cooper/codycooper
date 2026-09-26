import Link from "next/link";

import Comment from "@/components/comments/comments";
import { NewsletterSignup } from "@/components/newsletter-signup";
import type { PostDocument } from "@/lib/content";

interface Props {
  allPosts: PostDocument[];
  post: PostDocument;
}

export default function PostFooter({ allPosts, post }: Props) {
  const sortedPosts = [...allPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const postIndex = sortedPosts.findIndex((item) => item.slug === post.slug);
  const prev = sortedPosts[postIndex + 1] ?? null;
  const next = sortedPosts[postIndex - 1] ?? null;

  const postUrl = `https://codycooper.io${post.slug}`;
  const shareTwitterUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(
    post.title
  )}&url=${encodeURIComponent(postUrl)}`;
  const shareLinkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    postUrl
  )}`;

  return (
    <footer>
      <div className="py-8 text-center">
        <p className="text-lg font-semibold !text-[#292524] dark:!text-[#d6d3d1]">
          Want more like this?
        </p>
        <p className="mb-4 text-sm !text-[#44403c] dark:!text-[#d6d3d1]">
          Occasional notes on deliberate leadership. No spam, unsubscribe
          anytime.
        </p>
        <NewsletterSignup className="mx-auto max-w-md" />
      </div>

      <hr className="mx-auto w-56 border-stone-400 dark:border-stone-600" />

      <div className="flex justify-center py-6 text-sm !text-[#292524] dark:!text-[#d6d3d1]">
        <div>
          <a
            className="!text-[#292524] dark:!text-[#d6d3d1]"
            href={shareTwitterUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Share on Twitter
          </a>
          <span className="!text-[#292524] dark:!text-[#d6d3d1]"> • </span>
          <a
            className="!text-[#292524] dark:!text-[#d6d3d1]"
            href={shareLinkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Share on LinkedIn
          </a>
        </div>
      </div>

      <hr className="mx-auto w-56 border-stone-400 dark:border-stone-600" />
      <Comment />
      <hr className="mx-auto w-56 border-stone-400 dark:border-stone-600" />

      <div className="divide-gray-200 py-6 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
        {(next || prev) && (
          <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
            {prev && (
              <div>
                <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Previous Article
                </h2>
                <div>
                  <Link href={prev.slug}>{prev.title}</Link>
                </div>
              </div>
            )}
            {next && (
              <div>
                <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Next Article
                </h2>
                <div>
                  <Link href={next.slug}>{next.title}</Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </footer>
  );
}
