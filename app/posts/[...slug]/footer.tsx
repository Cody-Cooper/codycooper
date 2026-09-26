import Link from "next/link";

import { siteUrl } from "@/lib/site";
import { Comments } from "@/components/comments";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { allPosts, type PostDocument } from "@/lib/content";

interface Props {
  post: PostDocument;
}

export default function PostFooter({ post }: Props) {
  const postIndex = allPosts.findIndex((item) => item.slug === post.slug);
  const prev = allPosts[postIndex + 1] ?? null;
  const next = allPosts[postIndex - 1] ?? null;

  const postUrl = `${siteUrl}${post.slug}`;
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
      <Comments key={post.slug} />
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
