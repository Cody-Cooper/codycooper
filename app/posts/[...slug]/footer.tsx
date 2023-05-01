import Link from "next/link";
import { NextPage } from "next";
import { Post } from "./page.types";

interface Props {
  allPosts: Post[];
  post: Post;
}

const PostFooter: NextPage<Props> = ({ allPosts, post }) => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const postIndex = sortedPosts.findIndex((p) => p.slug === post.slug);
  const prevContent = sortedPosts[postIndex + 1] || null;
  const prev = prevContent ? prevContent : null;
  const nextContent = sortedPosts[postIndex - 1] || null;
  const next = nextContent ? nextContent : null;

  return (
    <footer>
      <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y py-6">
        {(next || prev) && (
          <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
            {prev && (
              <div>
                <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Previous Article
                </h2>
                <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                  <Link href={`${prev.slug}`}>{prev.title}</Link>
                </div>
              </div>
            )}
            {next && (
              <div>
                <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Next Article
                </h2>
                <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                  <Link href={`${next.slug}`}>{next.title}</Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </footer>
  );
};

export default PostFooter;
