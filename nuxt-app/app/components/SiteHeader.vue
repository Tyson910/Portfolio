<script setup lang="ts">
import { socialLinks } from "~/utils/social-links";

const route = useRoute();
const navItems = [
  { href: "/", label: "Home" },
  { href: "/ts-university", label: "TypeScript University" },
  { href: "/snippets", label: "Code Snippets" },
];

function isActive(href: string) {
  return href === "/" ? route.path === "/" : route.path.startsWith(href);
}
</script>

<template>
  <header class="border-b-2 border-dashed border-default">
    <UContainer as="nav" class="flex items-center justify-between" aria-label="Main navigation">
      <div class="flex items-center gap-5">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="px-1 py-4 font-hand text-xl text-muted transition-colors hover:text-highlighted"
          active-class="text-highlighted"
          :aria-current="isActive(item.href) ? 'page' : undefined"
        >
          <span :class="isActive(item.href) ? 'squiggle' : ''">{{ item.label }}</span>
        </NuxtLink>
      </div>
      <div class="hidden items-center gap-4 md:flex">
        <a
          v-for="link in socialLinks"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noreferrer"
          class="text-muted hover:text-highlighted"
        >
          <span class="sr-only">{{ link.ariaLabel }}</span>
          <UIcon :name="link.icon" mode="svg" class="size-5" />
        </a>
      </div>
    </UContainer>
  </header>
</template>
