import { MDXContent } from "@content-collections/mdx/react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { mdxComponents } from "@/components/mdx-components";
import { StructuredData } from "@/components/structured-data";
import { allPosts, getPost } from "@/lib/content";

import PostFooter from "./footer";
import "./prism.css";

interface PostProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getPostFromParams(params: PostProps["params"]) {
  const { slug } = await params;
  return getPost(slug?.join("/"));
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

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

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

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
        <hr className="mx-auto w-56 border-stone-400 dark:border-stone-600" />
        <MDXContent code={post.mdx} components={mdxComponents} />
      </article>
      <PostFooter allPosts={allPosts} post={post} />
    </>
  );
}
