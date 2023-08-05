import Link from "next/link";
import { NextPage } from "next";
import { Post, FileName } from "./page.types";
import Comment from "@/components/comments/comments";

interface Props {
  allPosts: Post[];
  post: Post;
  postName: FileName;
}

const PostFooter: NextPage<Props> = ({ allPosts, post, postName }) => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const postIndex = sortedPosts.findIndex((p) => p.slug === post.slug);
  const prevContent = sortedPosts[postIndex + 1] || null;
  const prev = prevContent ? prevContent : null;
  const nextContent = sortedPosts[postIndex - 1] || null;
  const next = nextContent ? nextContent : null;

  const editUrl = `https://github.com/Cody-Cooper/codycooper/blob/master/content/posts/${postName}.mdx`;
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://codycooper.io/blog/${post.slug}`
  )}`;

  return (
    <footer>
      <hr className="w-56 mx-auto border-stone-400" />
      <div className="flex justify-center pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300">
        <div>
          <Link className="text-stone-900" href={discussUrl}>
            {"Discuss on Twitter "}
          </Link>
          <p className="text-stone-900 inline-block"> • </p>
          <Link className="text-stone-900" href={editUrl}>
            {" View on GitHub"}
          </Link>
        </div>
      </div>
      <hr className="w-56 mx-auto border-stone-400" />
      <Comment />
      <hr className="w-56 mx-auto border-stone-400" />
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
