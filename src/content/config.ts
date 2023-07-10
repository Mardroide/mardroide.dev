import { z, defineCollection } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional() || 'This is a default description',
    image: z.string().optional()
  })
})

export const collections = { blog }
