import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import prefetch from '@astrojs/prefetch';
import mdx from '@astrojs/mdx';
import markdownEmoji from 'remark-emoji';
import { calcReadingTime } from './src/utils/frontmatter-helpers/calc-reading-time.mjs';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    prefetch({
      // Only prefetch links with an href that begins with `/` (internal links)
      selector: "a[href^='/']",
    }),
    mdx({
      remarkPlugins: [markdownEmoji, calcReadingTime],
    }),
    svelte(),
  ],
});
