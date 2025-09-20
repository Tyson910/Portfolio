import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

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
      language: z.enum(["Typescript", "CSS"]),
    }),
});

export const collections = { snippet };
