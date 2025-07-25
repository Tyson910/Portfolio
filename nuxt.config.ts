// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  site: {
    url: "https://tyson-suttle.com",
    name: "My Portolio Site",
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml"],
    },
  },
  css: ['~/assets/css/tailwind.css'],
  modules: [
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    [
      "@nuxt/content",
      {
        build: {
          markdown: {
            highlight: {
              theme: "night-owl",
            },
          },
        },
      },
    ],
  ],
});
