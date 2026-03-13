import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['comparatifs', 'guides', 'agents', 'business', 'outils']),
    featured: z.boolean().default(false),
    hero: z.boolean().default(false),
  }),
});

export const collections = { articles };
