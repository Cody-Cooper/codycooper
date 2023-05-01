import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { EditUrlFunction, DiscussUrlFunction, Post } from "./page.types";
import Comment from "@/components/comments/comments";
import Link from "next/link";
import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
import PostFooter from "./footer";

import "./prism.css";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  const fileName = slug.split("/").pop() || "";

  return {
    post,
    fileName,
  };
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const { post } = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const { post, fileName } = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  const editUrl: EditUrlFunction = (fileName) =>
    `https://github.com/Cody-Cooper/codycooper/blob/master/content/posts/${fileName}.mdx`;

  const discussUrl: DiscussUrlFunction = (slug) =>
    `https://mobile.twitter.com/search?q=${encodeURIComponent(
      `https://codycooper.io/blog/${slug}`
    )}`;

  return (
    <>
      <article className="py-6 mx-4 prose dark:prose-invert">
        <h1 className="mb-2">{post.title}</h1>
        {post.description && <p className="text-l mt-0">{post.description}</p>}
        <hr className="w-56 mx-auto border-stone-400" />
        <Mdx code={post.body.code} />
      </article>
      <hr className="w-56 mx-auto border-stone-400" />
      <div className="flex justify-center pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300">
        <div>
          <Link className="text-stone-900" href={discussUrl(post.slug)}>
            {"Discuss on Twitter "}
          </Link>
          <p className="text-stone-900 inline-block"> • </p>
          <Link className="text-stone-900" href={editUrl(fileName)}>
            {" View on GitHub"}
          </Link>
        </div>
      </div>
      <hr className="w-56 mx-auto border-stone-400" />
      <Comment />
      <hr className="w-56 mx-auto border-stone-400" />
      <PostFooter allPosts={allPosts} post={post} />
    </>
  );
}
