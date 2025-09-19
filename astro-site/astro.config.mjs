// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
});
