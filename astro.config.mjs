import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import markdownEmoji from 'remark-emoji';
import { calcReadingTime } from './src/utils/frontmatter-helpers/calc-reading-time.mjs';
import svelte from '@astrojs/svelte';
import expressiveCode from 'astro-expressive-code';
import Icons from 'unplugin-icons/vite';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/blog/film': {
      status: 301,
      destination: '/film'
    }
  },
  prefetch: true,
  integrations: [
    react(),
    expressiveCode(),
    svelte(),
    mdx({
      remarkPlugins: [markdownEmoji, calcReadingTime],
    }),
  ],
  vite: {
    plugins: [
      Icons({
        compiler: 'svelte',
        autoInstall: true,
      }),
    ],
  },
});
