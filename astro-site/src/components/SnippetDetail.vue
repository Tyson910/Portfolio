<script setup lang="ts">
import type { CollectionEntry } from "astro:content";
const { snippet } = defineProps<{
  snippet: CollectionEntry<"snippet">;
}>();
</script>

<template>
  <a
    :href="`/snippets/${snippet.id}`"
    class="flex gap-x-4 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800"
  >
    <div class="flex flex-col text-sm/6 gap-y-1">
      <p
        class="font-semibold text-zinc-900 dark:text-zinc-50 group-hover:underline"
      >
        {{ snippet.data.title }}
      </p>
      <p class="text-xs text-zinc-600 dark:text-zinc-300 -mt-1 mb-2">
        Created on
        {{
          new Date(snippet.data.dateCreated).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        }}
      </p>
      <div class="flex flex-col md:flex-row gap-2 whitespace-nowrap">
        <span
          v-for="tag in snippet.data.tags"
          class="w-max inline-flex items-center rounded-full bg-zinc-50 px-2 py-0.5 text-xs font-medium text-zinc-600 ring-1 ring-inset ring-zinc-500/10"
        >
          {{ tag }}
        </span>
      </div>
      <p class="mt-1 line-clamp-2 text-sm/6 text-zinc-600 dark:text-zinc-50">
        {{ snippet.data.description }}
      </p>
    </div>
  </a>
</template>
