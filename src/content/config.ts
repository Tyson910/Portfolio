// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Define your collection(s)
const foodBlogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    layout: z.literal("@layouts/FoodBlogLayout.astro"),
    author: z.literal("Tyson Suttle"),
    title: z.string(),
    meta_description: z.string(),
    difficulty: z.enum(["Easy", "Medium", "Hard"]),
    draft: z.boolean(),
    totalCookTime: z.string(),
    tags: z.array(z.string()),
    dateCreated: z.coerce.date(),
    lastUpdated: z.coerce.date(),
  }),
});

// const techBlogCollection = defineCollection({
//   type: 'content',
//   schema: z.object({
//     layout: z.literal("@layouts/BlogLayout.astro"),
//     meta_description: z.string(),
//     title: z.string(),
//     author: z.literal("Tyson Suttle"),
//     dateCreated: z.coerce.date(),
//     lastUpdated: z.coerce.date(),
//     prevPage: z.nullable(z.string()).optional(),
//     nextPage: z.nullable(z.string()).optional(),
//     tags: z.array(z.string()),
//     draft: z.boolean(),
//   }),
// });

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  "food": foodBlogCollection,
  // "tech": techBlogCollection,
};
