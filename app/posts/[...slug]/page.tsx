import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Mdx } from "@/components/mdx-components";
import { StructuredData } from "@/components/structured-data";

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
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    return null;
  }

  return {
    post,
    fileName: slug.split("/").pop() ?? "",
  };
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const result = await getPostFromParams(params);

  if (!result) {
    return {};
  }

  const { post } = result;
  const imageUrl = `/api/og?title=${encodeURIComponent(post.title)}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: post.slug,
    },
    openGraph: {
      type: "article",
      url: post.slug,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: ["Cody Cooper"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const result = await getPostFromParams(params);

  if (!result) {
    notFound();
  }

  const { post, fileName } = result;

  const canonicalUrl = `https://codycooper.io${post.slug}`;
  const imageUrl = `https://codycooper.io/api/og?title=${encodeURIComponent(
    post.title
  )}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonicalUrl}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    mainEntityOfPage: canonicalUrl,
    image: imageUrl,
    author: {
      "@id": "https://codycooper.io/#person",
    },
    publisher: {
      "@id": "https://codycooper.io/#person",
    },
  };

  return (
    <>
      <StructuredData data={articleSchema} />
      <article className="prose py-6 dark:prose-invert">
        <h1 className="mb-2">{post.title}</h1>
        {post.description && <p className="mt-0 text-lg">{post.description}</p>}
        <hr className="mx-auto w-56 border-stone-400" />
        <Mdx code={post.body.code} />
      </article>
      <PostFooter allPosts={allPosts} post={post} postName={fileName} />
    </>
  );
}
