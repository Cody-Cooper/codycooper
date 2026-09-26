import type { ComponentType } from "react";

import About, { frontmatter as aboutFrontmatter } from "@/content/pages/about.mdx";
import Books, { frontmatter as booksFrontmatter } from "@/content/pages/books.mdx";
import FlareVmPart1, {
  frontmatter as flareVmPart1Frontmatter,
} from "@/content/posts/flare-vm-part-1.mdx";
import KnownForSayingNo, {
  frontmatter as knownForSayingNoFrontmatter,
} from "@/content/posts/known-for-saying-no.mdx";
import PlexKillstream, {
  frontmatter as plexKillstreamFrontmatter,
} from "@/content/posts/plex-killstream.mdx";
import RaspberryPiCustomMotd, {
  frontmatter as raspberryPiCustomMotdFrontmatter,
} from "@/content/posts/raspberry-pi-custom-MOTD.mdx";
import UnraidDynamicDns, {
  frontmatter as unraidDynamicDnsFrontmatter,
} from "@/content/posts/unraid-dynamic-dns.mdx";
import UnraidUmami, {
  frontmatter as unraidUmamiFrontmatter,
} from "@/content/posts/unraid-umami.mdx";

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

type PageFrontmatter = {
  title: string;
  description?: string;
};

type PostFrontmatter = PageFrontmatter & {
  date: string;
};

function page(
  slugAsParams: string,
  frontmatter: PageFrontmatter,
  Content: ComponentType
): PageDocument {
  return {
    ...frontmatter,
    slug: `/${slugAsParams}`,
    slugAsParams,
    Content,
  };
}

function post(
  slugAsParams: string,
  frontmatter: PostFrontmatter,
  Content: ComponentType
): PostDocument {
  return {
    ...frontmatter,
    slug: `/posts/${slugAsParams}`,
    slugAsParams,
    Content,
  };
}

export const allPages: PageDocument[] = [
  page("about", aboutFrontmatter, About),
  page("books", booksFrontmatter, Books),
];

export const allPosts: PostDocument[] = [
  post("flare-vm-part-1", flareVmPart1Frontmatter, FlareVmPart1),
  post("known-for-saying-no", knownForSayingNoFrontmatter, KnownForSayingNo),
  post("plex-killstream", plexKillstreamFrontmatter, PlexKillstream),
  post(
    "raspberry-pi-custom-MOTD",
    raspberryPiCustomMotdFrontmatter,
    RaspberryPiCustomMotd
  ),
  post("unraid-dynamic-dns", unraidDynamicDnsFrontmatter, UnraidDynamicDns),
  post("unraid-umami", unraidUmamiFrontmatter, UnraidUmami),
];

export function getPage(slug: string) {
  return allPages.find((item) => item.slugAsParams === slug) ?? null;
}

export function getPost(slug: string) {
  return allPosts.find((item) => item.slugAsParams === slug) ?? null;
}
