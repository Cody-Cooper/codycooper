import { allPosts } from "@/lib/content";
import { siteUrl } from "@/lib/site";

const feedTitle = "Cody Cooper — Articles";
const feedDescription =
  "Articles from Cody Cooper on deliberate leadership, communication, technology, and whatever else is worth writing down.";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function rssDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toUTCString();
}

export function GET() {
  const selfUrl = `${siteUrl}/rss.xml`;
  const lastBuildDate = allPosts[0]?.date
    ? rssDate(allPosts[0].date)
    : new Date().toUTCString();

  const items = allPosts
    .map((post) => {
      const url = `${siteUrl}${post.slug}`;

      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${rssDate(post.date)}</pubDate>${
        post.description
          ? `\n      <description>${escapeXml(post.description)}</description>`
          : ""
      }
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(feedTitle)}</title>
    <link>${escapeXml(siteUrl)}</link>
    <description>${escapeXml(feedDescription)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${escapeXml(selfUrl)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
