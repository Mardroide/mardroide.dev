import { z, defineCollection } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z
      .string()
      .optional()
      .default('This is a default description.'),
    image: z.string().optional().default('/spigot.webp'),
    pubDate: z.string().transform((str) => new Date(str))
  })
})

export const collections = { blog }
