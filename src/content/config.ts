// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
import { file } from 'astro/loaders';

// 2. Define your collection(s)
// const techBlogCollection = defineCollection({
//   type: 'content',
//   schema: z.object({
//     layout: z
//       .literal('@layouts/BlogLayout.astro')
//       .default('@layouts/BlogLayout.astro'),
//     meta_description: z.string(),
//     title: z.string(),
//     author: z.literal('Tyson Suttle').default('Tyson Suttle'),
//     dateCreated: z.string().date(),
//     lastUpdated: z.string().date(),
//     prevPage: z.string().nullable(),
//     nextPage: z.string().nullable(),
//     tags: z.array(z.string()),
//     draft: z.boolean(),
//   }),
// });

const techSnippetsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    meta_title: z.string().optional(),
    meta_description: z.string(),
    title: z.string(),
    author: z.literal('Tyson Suttle').default('Tyson Suttle'),
    dateCreated: z.string().date(),
    lastUpdated: z.string().date(),
    tags: z.string().array(),
    draft: z.boolean(),
    isFeaturedPost: z.boolean(),
  }),
});

const filmCollection = defineCollection({
  loader: file('src/content/photos.json'),
  schema: ({ image }) =>
    z.object({
      date: z.string().datetime(),
      src: image(),
      location: z.string(),
      description: z.string().optional(),
      tags: z
        .enum([
          'Landscape',
          'Architecture',
          'Art',
          'Graffiti',
          'Nature / Wildlife',
          'Misc',
        ])
        .array(),
      filmType: z.enum([
        'Kodak Gold 200',
        'Kodak UltraMax 400',
        'Kodak Gold 800 (Disposable)',
        'Fuji Film 400',
      ]),
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
  photos: filmCollection,
};
