import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        dateCreated: z.string(),
        lastUpdated: z.string(),
        tags: z.array(z.string()),
        isDraft: z.boolean(),
        isFeaturedPost: z.boolean(),
        difficulty: z.enum(["Foundational", "Advanced"]).optional(),
        lessonType: z.enum(["tutorial", "reference", "exercise"]).optional(),
        topicCategory: z.string().optional(),
      }),
    }),
    snippets: defineCollection({
      type: "page",
      source: "snippets/**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        dateCreated: z.string(),
        lastUpdated: z.string(),
        tags: z.array(z.string()),
        draft: z.boolean(),
        isFeaturedPost: z.boolean(),
        language: z.enum(["Typescript", "CSS"]),
      }),
    }),
  },
});
