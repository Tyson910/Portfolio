import type { CollectionEntry } from "astro:content";

/** Sort posts from most recently updated to oldest */
export function sortBlogPostsByLastUpdated(
  blogPosts: CollectionEntry<"food">[] | CollectionEntry<"tech">[],
) {
  const sortedBlogPosts = [...blogPosts].sort((blogPostA, blogPostB) => {
    const date1LastUpdated = new Date(blogPostA.data.lastUpdated).getTime();
    const date2LastUpdated = new Date(blogPostB.data.lastUpdated).getTime();
    return date2LastUpdated - date1LastUpdated;
  });

  return sortedBlogPosts;
}
