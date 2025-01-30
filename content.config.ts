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
    photos: defineCollection({
      source: "film/**/*.json",
      type: "data",
      schema: z.object({
        date: z.string().datetime(),
        src: z.string().startsWith('/'),
        title: z.string(),
        location: z.string(),
        description: z.string().optional(),
        tags: z
          .enum([
            "Landscape",
            "Architecture",
            "Art",
            "Graffiti",
            "Nature / Wildlife",
            "Misc",
          ])
          .array(),
        filmType: z.enum([
          "Kodak Gold 200",
          "Kodak UltraMax 400",
          "Kodak Gold 800 (Disposable)",
          "Fuji Film 400",
          "Kodak Professional T-Max 400 Black and White",
        ]),
      }),
    }),
  },
});
