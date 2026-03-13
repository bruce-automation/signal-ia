import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    slug: z.string(),
    locale: z.enum(['en']).default('en'),
    redirectFrom: z.array(z.string()).default([]),
    category: z.enum(['comparisons', 'guides', 'agents', 'business', 'tools']),
    featured: z.boolean().default(false),
    hero: z.boolean().default(false),
  }),
});

export const collections = { articles };
