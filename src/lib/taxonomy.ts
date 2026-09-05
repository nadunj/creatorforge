// Central taxonomy for the whole site. Nav, category pages, article schema
// enums, and internal linking all read from this file so the category list
// only has to change in one place.

export const CATEGORIES = [
  {
    slug: 'ai-tools',
    name: 'AI Tools',
    description: 'The AI tools creators actually use, explained plainly.',
  },
  {
    slug: 'video',
    name: 'Video',
    description: 'AI video generation, editing, and clip tools for creators.',
  },
  {
    slug: 'audio-tts',
    name: 'Audio & TTS',
    description: 'AI voice generation, text-to-speech, and voice cloning.',
  },
  {
    slug: 'images',
    name: 'Images',
    description: 'AI image generators, thumbnail tools, and art platforms.',
  },
  {
    slug: 'youtube',
    name: 'YouTube',
    description: 'Growth, monetization, and production tips for YouTube creators.',
  },
  {
    slug: 'facebook',
    name: 'Facebook',
    description: 'Facebook Pages, Reels, and creator-monetization tools.',
  },
  {
    slug: 'automation',
    name: 'Automation',
    description: 'Scripting and automating the boring parts of content production.',
  },
  {
    slug: 'tutorials',
    name: 'Tutorials',
    description: 'Step-by-step, hands-on walkthroughs.',
  },
  {
    slug: 'comparisons',
    name: 'Comparisons',
    description: 'Head-to-head tool comparisons to help you pick.',
  },
  {
    slug: 'tiktok',
    name: 'TikTok',
    description: 'Music licensing, formats, and tools for TikTok creators.',
  },
  {
    slug: 'designers',
    name: 'Designers',
    description: 'Licensing and workflow guidance for design and client work.',
  },
  {
    slug: 'small-business',
    name: 'Small Business',
    description: 'Tools and workflows for small online businesses run by creators.',
  },
  {
    slug: 'internet',
    name: 'Internet & Connectivity',
    description: 'Connectivity, hardware, and infrastructure creators depend on.',
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug) as [string, ...string[]];

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

// Content "type" drives the URL prefix (/guides/, /compare/, ...) because
// that matches what people actually search for ("x vs y", "alternatives to x").
export const CONTENT_TYPES = [
  { slug: 'guides', name: 'Guides', description: 'In-depth, practical how-to guides.' },
  { slug: 'compare', name: 'Comparisons', description: 'Tool A vs Tool B, decided.' },
  { slug: 'alternatives', name: 'Alternatives', description: 'Alternatives to popular creator tools.' },
  { slug: 'reviews', name: 'Reviews', description: 'Hands-on tool reviews.' },
  { slug: 'pricing', name: 'Pricing', description: 'Confusing pricing and credit systems, explained.' },
] as const;

export type ContentTypeSlug = (typeof CONTENT_TYPES)[number]['slug'];

export const CONTENT_TYPE_SLUGS = CONTENT_TYPES.map((c) => c.slug) as [string, ...string[]];
