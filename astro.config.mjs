// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// IMPORTANT: replace with your real domain before deploying — canonical URLs,
// the sitemap, and RSS feed all depend on this being correct.
const SITE_URL = 'https://creatorforge.creatorforge.workers.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});