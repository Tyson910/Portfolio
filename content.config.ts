import { defineContentConfig, defineCollection } from "@nuxt/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";
import { z } from 'zod';

export default defineContentConfig({
  collections: {
    blogs: defineCollection(
      asSitemapCollection({
        source: {
          include: "blog/**/*.md",
          prefix: "/blog",
        },
        type: "page",
        schema: z.object({
          dateCreated: z.string().date(),
          lastUpdated: z.string().date(),
          tags: z.string().nonempty().array(),
          isDraft: z.boolean().default(true),
          isFeaturedPost: z.boolean().default(false),
        }),
      })
    ),
    snippets: defineCollection(
      asSitemapCollection({
        source: {
          include: "snippets/**/*.md",
          prefix: "/blog/snippets",
        },
        type: "page",
        schema: z.object({
          dateCreated: z.string().date(),
          lastUpdated: z.string().date(),
          tags: z.string().array(),
          draft: z.boolean(),
          isFeaturedPost: z.boolean(),
        }),
      })
    ),
    projects: defineCollection({
      source: "projects/**/*.yml",
      type: "data",
      schema: z.object({
        name: z.string(),
        imageURL: z.string().url(),
        description: z.string(),
        techUsed: z.array(z.string()),
        deployURL: z.string().url(),
        sourceCodeURL: z.string().url().nullable(),
      }),
    }),
  },
});
