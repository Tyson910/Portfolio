import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import image from '@astrojs/image';
import prefetch from '@astrojs/prefetch';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    image(),
    prefetch({
      // Only prefetch links with an href that begins with `/` (internal links)
      selector: "a[href^='/']"
    }),
  ],
});
