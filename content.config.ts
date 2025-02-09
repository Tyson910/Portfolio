import { defineContentConfig, defineCollection, z } from "@nuxt/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";

export default defineContentConfig({
  collections: {
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
    photos: defineCollection(
      asSitemapCollection({
        source: "film/**/*.json",
        type: "page",
        schema: z.object({
          date: z.string().date(),
          src: z.string().startsWith("/"),
          title: z.string(),
          location: z.string(),
          description: z.string().optional(),
          isPotraitOrientation: z.boolean().default(false),
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
      })
    ),
  },
});
