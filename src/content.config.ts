import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    slug: z.string(),
    locale: z.enum(['fr', 'en']).default('fr'),
    redirectFrom: z.array(z.string()).default([]),
    category: z.enum(['comparatifs', 'guides', 'agents', 'business', 'outils']),
    featured: z.boolean().default(false),
    hero: z.boolean().default(false),
  }),
});

export const collections = { articles };
