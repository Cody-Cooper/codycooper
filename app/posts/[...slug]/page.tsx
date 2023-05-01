import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx-components";
import { allPosts } from "contentlayer/generated";

import PostFooter from "./footer";
import "./prism.css";

interface PostProps {
  params: {
    slug: string[];
  };
}

interface PostParams {
  post: (typeof allPosts)[number];
  fileName: string;
}

async function getPostFromParams(
  params: PostProps["params"]
): Promise<PostParams | null> {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((p) => p.slugAsParams === slug);

  if (!post) {
    return null;
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
  const result = await getPostFromParams(params);

  if (!result?.post) {
    return {};
  }

  return {
    title: result.post.title,
    description: result.post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((p) => ({
    slug: p.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const result = await getPostFromParams(params);

  if (!result) {
    notFound();
    return null;
  }

  const { post, fileName } = result;

  return (
    <>
      <article className="py-6 mx-4 prose dark:prose-invert">
        <h1 className="mb-2">{post.title}</h1>
        {post.description && <p className="text-l mt-0">{post.description}</p>}
        <hr className="w-56 mx-auto border-stone-400" />
        <Mdx code={post.body.code} />
      </article>
      <PostFooter allPosts={allPosts} post={post} postName={fileName} />
    </>
  );
}
