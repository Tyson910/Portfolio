import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    snippets: defineCollection({
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
    }),
    projects: defineCollection({
      source: 'projects/**/*.yml',
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
