// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const techBlogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    layout: z
      .literal('@layouts/BlogLayout.astro')
      .default('@layouts/BlogLayout.astro'),
    meta_description: z.string(),
    title: z.string(),
    author: z.literal('Tyson Suttle').default('Tyson Suttle'),
    dateCreated: z.string().date(),
    lastUpdated: z.string().date(),
    prevPage: z.string().nullable(),
    nextPage: z.string().nullable(),
    tags: z.array(z.string()),
    draft: z.boolean(),
  }),
});

const techSnippetsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    meta_title: z.string(),
    meta_description: z.string(),
    title: z.string(),
    author: z.literal('Tyson Suttle').default('Tyson Suttle'),
    dateCreated: z.string().date(),
    lastUpdated: z.string().date(),
    tags: z.string().array(),
    draft: z.boolean(),
  }),
});

// TODO: circle back to this
// const projectsCollection = defineCollection({
//   type: 'data',
//   schema: z.object({
//     layout: z.literal('@layouts/BlogLayout.astro'),
//     meta_description: z.string(),
//     title: z.string(),
//     author: z.literal('Tyson Suttle').default('Tyson Suttle'),
//     dateCreated: z.coerce.date(),
//     lastUpdated: z.coerce.date(),
//     prevPage: z.string().nullable(),
//     nextPage: z.string().nullable(),
//     tags: z.array(z.string()),
//     draft: z.boolean(),
//   }),
// });

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  // "tech": techBlogCollection,
  snippets: techSnippetsCollection,
};
