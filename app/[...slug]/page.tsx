import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPages } from "contentlayer/generated";

import { Mdx } from "@/components/mdx-components";

interface PageProps {
  params: {
    slug: string[];
  };
}

async function getPageFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/");
  const page = allPages.find((page) => page.slugAsParams === slug);

  if (!page) {
    return null;
  }

  return page;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params);

  if (!page) {
    return {};
  }

  const canonicalPath = `/${page.slugAsParams}`;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      url: canonicalPath,
      title: page.title,
      description: page.description,
    },
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }));
}

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params);

  if (!page) {
    notFound();
  }

  return (
    <article className="prose py-6 dark:prose-invert">
      <h1 className="text-center">{page.title}</h1>
      {page.description && <p className="text-xl">{page.description}</p>}
      <hr className="mx-auto w-56 border-stone-400" />
      <Mdx code={page.body.code} />
    </article>
  );
}
