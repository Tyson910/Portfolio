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

const project = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.yml" }),
  schema: z.object({
    name: z.string(),
    imageURL: z.string().url(),
    description: z.string(),
    techUsed: z.array(z.string()),
    deployURL: z.string().url(),
    sourceCodeURL: z.string().url().nullable(),
  }),
});

export const collections = { snippet };
