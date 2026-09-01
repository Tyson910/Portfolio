<script setup lang="ts">
import { socialLinks } from "~/utils/social-links";
</script>

<template>
  <footer class="border-t-2 border-dashed border-default">
    <UContainer class="py-8">
      <div class="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <p class="text-sm/6 text-muted">
          &copy; {{ new Date().getFullYear() }} Tyson Suttle. All rights reserved.
        </p>
        <div class="flex flex-row gap-4">
          <a
            v-for="link in socialLinks"
            :key="link.href"
            :href="link.href"
            class="text-muted transition-colors hover:text-highlighted"
          >
            <span class="sr-only">{{ link.ariaLabel }}</span>
            <UIcon :name="link.icon" mode="svg" class="size-5" />
          </a>
        </div>
      </div>
      <p class="font-hand mt-6 text-center text-lg text-dimmed">~ thanks for scrolling ~</p>
    </UContainer>
  </footer>
</template>
