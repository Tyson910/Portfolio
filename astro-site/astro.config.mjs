// @ts-check

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },
  site: "https://example.com",
  integrations: [
    expressiveCode({
      defaultProps: {
        // Enable word wrap by default
        wrap: true,
        // Disable wrapped line indentation for terminal languages
        overridesByLang: {
          "bash,ps,sh": { preserveIndent: false },
        },
      },
    }),
    mdx(),
    sitemap(),
    vue(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
