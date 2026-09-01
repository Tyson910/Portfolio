import { queryCollection } from "@nuxt/content/server";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export default defineEventHandler(async (event) => {
  const posts = (await queryCollection(event, "blog").all())
    .filter((post) => !post.isDraft)
    .sort((left, right) => Date.parse(right.dateCreated) - Date.parse(left.dateCreated));
  const origin = "https://tyson-suttle.com";
  const items = posts
    .map(
      (post) => `<item>
  <title>${escapeXml(post.title)}</title>
  <link>${origin}${post.path}</link>
  <guid>${origin}${post.path}</guid>
  <description>${escapeXml(post.description)}</description>
  <pubDate>${new Date(post.dateCreated).toUTCString()}</pubDate>
</item>`,
    )
    .join("\n");

  setResponseHeader(event, "content-type", "application/rss+xml; charset=utf-8");
  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>Tyson Suttle's Portfolio</title>
  <link>${origin}</link>
  <description>Writing about TypeScript, full-stack architecture, and lessons learned in production.</description>
  ${items}
</channel>
</rss>`;
});
