import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const snippet = defineCollection({
  loader: glob({ base: "./src/content/snippets", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: () =>
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

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      dateCreated: z.coerce.date(),
      lastUpdated: z.coerce.date(),
      tags: z.string().array(),
      isDraft: z.boolean(),
      isFeaturedPost: z.boolean(),
      difficulty: z.enum(["Foundational", "Advanced"]).optional(),
      lessonType: z.enum(["tutorial", "reference", "exercise"]).optional(),
      topicCategory: z.string().optional(),
    }),
});

const project = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.yml" }),
  schema: z.object({
    name: z.string(),
    imageURL: z.string().nullable(),
    description: z.string(),
    techUsed: z.array(z.string()),
    deployURL: z.string().url(),
    sourceCodeURL: z.string().url().nullable(),
  }),
});

export const collections = { snippet, blog, project };
