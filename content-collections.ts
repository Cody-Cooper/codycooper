import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import { z } from "zod";

const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [rehypeCodeTitles, rehypePrism],
};

const pages = defineCollection({
  name: "pages",
  directory: "content/pages",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await context.cache(document.content, async () =>
      compileMDX(context, document, mdxOptions)
    );

    return {
      ...document,
      slug: `/${document._meta.path}`,
      slugAsParams: document._meta.path,
      mdx,
    };
  },
});

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await context.cache(document.content, async () =>
      compileMDX(context, document, mdxOptions)
    );

    return {
      ...document,
      slug: `/posts/${document._meta.path}`,
      slugAsParams: document._meta.path,
      mdx,
    };
  },
});

export default defineConfig({
  content: [pages, posts],
});
