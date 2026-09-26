import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { allPages, getPage } from "@/lib/content";
import { StructuredData } from "@/components/structured-data";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getPageFromParams(params: PageProps["params"]) {
  const { slug } = await params;
  return getPage(slug?.join("/"));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params);

  if (!page) {
    return {};
  }

  const canonicalPath = `/${page.slugAsParams}`;
  const imageUrl = `/api/og?title=${encodeURIComponent(page.title)}`;

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
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [imageUrl],
    },
  };
}

export function generateStaticParams() {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }));
}

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params);

  if (!page) {
    notFound();
  }

  const { Content } = page;
  const canonicalUrl = `https://codycooper.io/${page.slugAsParams}`;
  const pageSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: page.title,
    description: page.description,
    author: {
      "@id": "https://codycooper.io/#person",
    },
    isPartOf: {
      "@id": "https://codycooper.io/#website",
    },
  };

  const bookSchema =
    page.slugAsParams === "books"
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Books by Cody Cooper",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "Book",
                name: "Default: No",
                description:
                  "A book about deliberate leadership decisions, protecting time, energy, and attention, and being intentional about what earns a yes.",
                author: {
                  "@id": "https://codycooper.io/#person",
                },
                image: "https://codycooper.io/images/books/default-no.jpg",
                url: "https://codycooper.io/no",
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "Book",
                name: "Talking To Your Boss",
                description:
                  "A practical guide to communicating clearly with executives during cybersecurity incidents.",
                author: {
                  "@id": "https://codycooper.io/#person",
                },
                image:
                  "https://codycooper.io/images/books/talking-to-your-boss.jpg",
                url: "https://www.amazon.com/dp/B0GHTGTZ5Z",
              },
            },
          ],
        }
      : null;

  return (
    <>
      <StructuredData data={bookSchema ? [pageSchema, bookSchema] : pageSchema} />
      <article className="prose py-6 dark:prose-invert">
        <h1 className="text-center">{page.title}</h1>
        {page.description && <p className="text-xl">{page.description}</p>}
        <hr className="mx-auto w-56 border-stone-400 dark:border-stone-600" />
        <Content />
      </article>
    </>
  );
}
