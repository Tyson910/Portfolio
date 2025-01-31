<script setup lang="ts">
import { socialLinks } from "~/utils/social-links";
</script>

<template>
  <footer class="border-t border-zinc-100 dark:border-zinc-700/40">
    <div
      class="container py-12 md:flex md:items-center md:justify-between"
    >
      <div class="flex justify-center gap-x-6 md:order-2">
        <a
          v-for="{ href, Icon, ariaLabel } in socialLinks"
          :key="href"
          :href="href"
          class="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <span class="sr-only">{{ ariaLabel }}</span>
          <Icon aria-hidden="true" :name="Icon" class="size-6" />
        </a>
      </div>
      <p
        class="mt-8 text-center text-sm/6 text-gray-600 dark:text-gray-400 md:order-1 md:mt-0"
      >
        &copy; {{ new Date().getFullYear() }} Tyson Suttle. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
.container {
  @apply max-w-screen-lg mx-auto px-10 md:px-0;
}
</style>
