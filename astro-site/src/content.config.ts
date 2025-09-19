import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

const snippet = defineCollection({
  loader: glob({ base: "./src/content/snippets", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      dateCreated: z.coerce.date(),
      lastUpdated: z.coerce.date(),
      tags: z.string().array(),
      draft: z.boolean(),
      isFeaturedPost: z.boolean(),


      // // Transform string to Date object
      // pubDate: z.coerce.date(),
      // updatedDate: z.coerce.date().optional(),
      // heroImage: image().optional(),
    }),
});

export const collections = { blog, snippet };
