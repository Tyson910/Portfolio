// @ts-check

import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },
  site: "https://example.com",
  integrations: [mdx(), sitemap(), vue()],
  vite: {
    plugins: [tailwindcss()],
  },
});
