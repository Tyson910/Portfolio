<script setup lang="ts">
import type { SnippetsCollectionItem } from "@nuxt/content";

const { snippet } = defineProps<{
  snippet: SnippetsCollectionItem;
}>();
</script>

<template>
  <NuxtLink
    :href="snippet.path"
    class="flex gap-x-4 py-5 md:p-5 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800"
  >
    <div class="flex flex-col text-sm/6 gap-y-1">
      <p
        class="font-semibold text-zinc-900 dark:text-zinc-50 group-hover:underline"
      >
        {{ snippet.title }}
      </p>
      <p class="text-xs text-zinc-600 dark:text-zinc-300 -mt-1 mb-2">
        <time datetime="{post.data.dateCreated}">
          Created on
          {{
            new Date(snippet.dateCreated).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}
        </time>
      </p>
      <div class="flex flex-col md:flex-row gap-2 whitespace-nowrap">
        <span
          v-for="tag in snippet.tags"
          class="w-max inline-flex items-center rounded-full bg-zinc-50 px-2 py-0.5 text-xs font-medium text-zinc-600 ring-1 ring-inset ring-zinc-500/10"
        >
          {{ tag }}
        </span>
      </div>
      <p class="mt-1 line-clamp-2 text-sm/6 text-zinc-600 dark:text-zinc-50">
        {{ snippet.meta.meta_description }}
      </p>
    </div>
  </NuxtLink>
</template>
