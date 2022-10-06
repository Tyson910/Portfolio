import type { BlogLayoutProps } from "@layouts/BlogLayout.astro";
import type { MDXInstance } from "astro";

/** Sort posts from most recently updated to oldest */
export function sortBlogPostsByLastUpdated(
  blogPosts: MDXInstance<BlogLayoutProps["frontmatter"]>[],
): MDXInstance<BlogLayoutProps["frontmatter"]>[] {
  const sortedBlogPosts = [...blogPosts].sort((blogPostA, blogPostB) => {
    const date1LastUpdated = new Date(blogPostA.frontmatter.lastUpdated).getTime();
    const date2LastUpdated = new Date(blogPostB.frontmatter.lastUpdated).getTime();
    return date2LastUpdated - date1LastUpdated;
  });

  return sortedBlogPosts;
}
