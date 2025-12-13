// @ts-check

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";
import ecTwoSlash from "expressive-code-twoslash";
import Icons from "unplugin-icons/vite";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
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
          explicitTrigger: true,
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
