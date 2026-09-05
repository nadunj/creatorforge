// Single source of truth for the site's editorial byline — used in Article
// JSON-LD schema and the About/author page. A pen name, not a legal name;
// keep it consistent everywhere rather than defaulting to the org name,
// since search engines and readers both weigh a named author differently
// than an anonymous "Organization" byline.
export const AUTHOR = {
  name: 'Reese Calder',
  title: 'Editor, CreatorForge',
  bio: "Reese covers the AI voice, video, and image tools creators actually rely on — testing pricing, licensing, and production workflows firsthand rather than repeating vendor marketing copy. Reese runs CreatorForge's own narration and automation pipeline day to day, which is where most of this site's practical detail comes from.",
} as const;
