import type { ComponentType } from "react";

type MdxModule<T> = {
  default: ComponentType;
  frontmatter: T;
};

export interface PageDocument {
  title: string;
  description?: string;
  slug: string;
  slugAsParams: string;
  Content: ComponentType;
}

export interface PostDocument extends PageDocument {
  date: string;
}

const pageModules = import.meta.glob("../content/pages/*.mdx", {
  eager: true,
}) as Record<string, MdxModule<{ title: string; description?: string }>>;

const postModules = import.meta.glob("../content/posts/*.mdx", {
  eager: true,
}) as Record<
  string,
  MdxModule<{ title: string; description?: string; date: string }>
>;

function fileSlug(path: string) {
  return path.split("/").pop()?.replace(/\.mdx$/, "") ?? "";
}

export const allPages: PageDocument[] = Object.entries(pageModules).map(
  ([path, module]) => {
    const slugAsParams = fileSlug(path);

    return {
      ...module.frontmatter,
      slug: `/${slugAsParams}`,
      slugAsParams,
      Content: module.default,
    };
  }
);

export const allPosts: PostDocument[] = Object.entries(postModules).map(
  ([path, module]) => {
    const slugAsParams = fileSlug(path);

    return {
      ...module.frontmatter,
      slug: `/posts/${slugAsParams}`,
      slugAsParams,
      Content: module.default,
    };
  }
);

export function getPage(slug: string) {
  return allPages.find((page) => page.slugAsParams === slug) ?? null;
}

export function getPost(slug: string) {
  return allPosts.find((post) => post.slugAsParams === slug) ?? null;
}
