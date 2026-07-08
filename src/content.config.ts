import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.mdx' }),
  schema: z.object({
    translationKey: z.string(),
    locale: z.enum(['zh-CN', 'en']),
    title: z.string(),
    record: z.string(),
    type: z.string(),
    year: z.number(),
    status: z.enum(['live', 'active', 'paused', 'archived']),
    thesis: z.string(),
    insight: z.string(),
    featured: z.boolean(),
    order: z.number(),
    metrics: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
        })
      )
      .optional(),
    territories: z.array(z.enum(['retrieval', 'agents', 'opportunity', 'commercial'])),
    heroArtifact: z.string().optional(),
  }),
});

export const collections = { work };
