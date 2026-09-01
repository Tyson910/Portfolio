import { fileURLToPath } from "node:url";

const expressiveCodePlugin = fileURLToPath(
  new URL("./build/rehype-expressive-code.mjs", import.meta.url),
);
const mdcRuntimeImports = fileURLToPath(
  new URL("./build/mdc-runtime-imports.mjs", import.meta.url),
);

// Hoisted so the `secrets` key skips Nitro's vendored Wrangler types, which lag
// behind the installed wrangler (4.119+ supports `secrets.required` and
// validates it at deploy time).
const wranglerConfig = {
  secrets: {
    required: ["NUXT_GITHUB_TOKEN"],
  },
  d1_databases: [
    {
      binding: "portfolio_content",
      database_name: "portfolio-content",
      database_id: "f6f6de17-1c8f-4b33-bf1d-c4848559e35f",
    },
  ],
};

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    githubToken: "",
  },
  vite: {
    server: {
      strictPort: true,
    },
  },
  ui: {
    colorMode: false,
    fonts: false,
    experimental: { componentDetection: true },
  },
  compatibilityDate: "2026-08-01",
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxtjs/sitemap"],
  css: ["~/assets/css/main.css"],
  experimental: {
    payloadExtraction: false,
  },
  icon: {
    provider: "none",
    fallbackToApi: false,
    serverBundle: false,
    clientBundle: {
      scan: false,
      icons: [
        "ri:arrow-up-s-line",
        "ri:bluesky-line",
        "ri:calendar-line",
        "ri:code-s-slash-line",
        "ri:github-fill",
        "ri:global-line",
        "ri:linkedin-fill",
        "ri:price-tag-3-line",
        "ri:refresh-line",
      ],
    },
  },
  site: {
    url: "https://tyson-suttle.com",
    name: "Tyson Suttle",
  },
  sitemap: {
    zeroRuntime: true,
  },
  content: {
    database: {
      type: "d1",
      bindingName: "portfolio_content",
    },
    renderer: {
      alias: {
        button: "CodeCopyButton",
      },
    },
    experimental: {
      sqliteConnector: "native",
    },
    build: {
      markdown: {
        highlight: false,
        rehypePlugins: {
          [expressiveCodePlugin]: {
            src: expressiveCodePlugin,
            options: {
              defaultProps: {
                wrap: true,
                overridesByLang: {
                  "bash,ps,sh": { preserveIndent: false },
                },
              },
              frames: {
                showCopyToClipboardButton: true,
              },
            },
          },
        },
      },
    },
  },
  routeRules: {
    "/": { prerender: false },
    "/404": { prerender: true },
    "/blog/**": { prerender: true },
    "/snippets/**": { prerender: true },
    "/ts-university": { prerender: true },
  },
  nitro: {
    preset: "cloudflare_module",
    cloudflare: {
      deployConfig: true,
      wrangler: {
        //@ts-expect-error Nitro's vendored Wrangler types
        secrets: {
          required: ["NUXT_GITHUB_TOKEN"],
        },
        d1_databases: [
          {
            binding: "portfolio_content",
            database_name: "portfolio-content",
            database_id: "f6f6de17-1c8f-4b33-bf1d-c4848559e35f",
          },
        ],
      },
    },
    prerender: {
      crawlLinks: true,
      routes: ["/404.html", "/blog", "/rss.xml", "/snippets", "/ts-university"],
    },
  },
  hooks: {
    "nitro:config"(config) {
      config.alias ??= {};
      config.alias["#mdc-imports"] = mdcRuntimeImports;
    },
  },
});
