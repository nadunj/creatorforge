import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORY_SLUGS, CONTENT_TYPE_SLUGS } from './lib/taxonomy';

// Articles live under src/content/articles/<type>/<slug>.md — the folder
// name under articles/ IS the content type, so entry.id is already the
// correct URL path (e.g. "guides/best-ai-voice-generators-for-youtube").
const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(CONTENT_TYPE_SLUGS),
    categories: z.array(z.enum(CATEGORY_SLUGS)).min(1),
    tags: z.array(z.string()).default([]),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    // Whether the article contains affiliate links — drives the on-page
    // disclosure banner. Keep this honest, it's an FTC requirement, not decoration.
    hasAffiliateLinks: z.boolean().default(false),
  }),
});

// A lightweight tool directory for /tools/ — separate from articles because
// its shape (pricing, website, pros/cons) doesn't fit a long-form schema.
const tools = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tools' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    categories: z.array(z.enum(CATEGORY_SLUGS)).min(1),
    website: z.string().url(),
    affiliateUrl: z.string().url().optional(),
    pricingModel: z.enum(['free', 'freemium', 'paid', 'credits']),
    startingPrice: z.string().optional(),
    hasFreeTier: z.boolean(),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    bestFor: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles, tools };
