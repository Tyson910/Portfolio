<script setup lang="ts">
useHead({
  htmlAttrs: { lang: "en" },
  link: [
    { rel: "icon", type: "image/svg+xml", href: "/icons/avi.svg" },
    { rel: "sitemap", href: "/sitemap.xml" },
    {
      rel: "alternate",
      type: "application/rss+xml",
      title: "Tyson Suttle's Portfolio",
      href: "/rss.xml",
    },
    {
      rel: "preload",
      href: "/fonts/atkinson-regular.woff",
      as: "font",
      type: "font/woff",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/atkinson-bold.woff",
      as: "font",
      type: "font/woff",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/patrick-hand-regular.woff2",
      as: "font",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
  ],
});
</script>

<template>
  <UApp>
    <SiteHeader />
    <div class="flex-grow selection:bg-primary selection:text-inverted">
      <NuxtPage />
    </div>
    <SiteFooter />
  </UApp>
</template>
