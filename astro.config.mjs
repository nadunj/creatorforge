// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// IMPORTANT: replace with your real domain before deploying — canonical URLs,
// the sitemap, and RSS feed all depend on this being correct.
const SITE_URL = 'https://creatorforge.pages.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
