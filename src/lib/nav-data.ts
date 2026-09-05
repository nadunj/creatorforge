import { getCollection } from 'astro:content';
import { CATEGORIES, CONTENT_TYPES } from './taxonomy';

// Nav/footer should never link to an empty section — an empty "Reviews"
// page is confusing to a first-time visitor. Compute what actually has
// published content and filter the static taxonomy down to that.
export async function getActiveNav() {
  const [articles, tools] = await Promise.all([
    getCollection('articles', ({ data }) => !data.draft),
    getCollection('tools', ({ data }) => !data.draft),
  ]);

  const usedCategorySlugs = new Set([
    ...articles.flatMap((a) => a.data.categories),
    ...tools.flatMap((t) => t.data.categories),
  ]);
  const usedTypeSlugs = new Set(articles.map((a) => a.data.type));

  return {
    categories: CATEGORIES.filter((c) => usedCategorySlugs.has(c.slug)),
    contentTypes: CONTENT_TYPES.filter((t) => usedTypeSlugs.has(t.slug)),
  };
}
