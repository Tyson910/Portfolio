import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import prefetch from '@astrojs/prefetch';
import mdx from '@astrojs/mdx';
import markdownEmoji from 'remark-emoji';
import { calcReadingTime } from './src/utils/frontmatter-helpers/calc-reading-time.mjs';
import svelte from '@astrojs/svelte';
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    prefetch({
      // Only prefetch links with an href that begins with `/` (internal links)
      selector: "a[href^='/']",
    }),
    expressiveCode(),
    svelte(),
    mdx({
      remarkPlugins: [markdownEmoji, calcReadingTime],
    }),
  ],
});
