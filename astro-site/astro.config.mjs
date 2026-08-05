// @ts-check

import cloudflare from "@astrojs/cloudflare";
import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import ecTwoSlash from "expressive-code-twoslash";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  server: {
    port: 3000,
  },
  redirects: {
    "/photos": {
      status: 301,
      destination: "https://photos.tyson-suttle.com",
    },
    "/photos/*": {
      status: 301,
      destination: "https://photos.tyson-suttle.com",
    },
  },
  site: "https://tyson-suttle.com",
  markdown: {
    processor: unified(),
  },
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
      plugins: [
        ecTwoSlash({
          instanceConfigs: {
            twoslash: {
              explicitTrigger: true,
            },
          },
        }),
      ],
    }),
    mdx(),
    sitemap(),
    vue(),
  ],
  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: "astro",
        autoInstall: true,
      }),
      Icons({
        compiler: "vue3",
      }),
    ],
  },
});
