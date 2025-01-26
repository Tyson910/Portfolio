import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // content: defineCollection({
    //   type: 'page',
    //   source: '**/*.md'
    // }),
    snippets: defineCollection({
      source: './content/snippets/**/*.md',
      type: 'page',
      schema: z.object({
        author: z.literal('Tyson Suttle').default('Tyson Suttle'),
        dateCreated: z.string().date(),
        lastUpdated: z.string().date(),
        tags: z.string().array(),
        draft: z.boolean(),
        isFeaturedPost: z.boolean(),
      })
    })
  }
})
