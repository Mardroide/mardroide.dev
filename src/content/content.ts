import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    decription: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional()
  })
})

export const collections = {
  blog: blogCollection
}
