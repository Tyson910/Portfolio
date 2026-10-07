<script setup lang="ts">
type Snippet = {
  path: string;
  title: string;
  description: string;
  lastUpdated: string;
  language: string;
};

const props = defineProps<{ snippets: Snippet[] }>();
const sortedSnippets = computed(() =>
  [...props.snippets].sort(
    (left, right) => Date.parse(right.lastUpdated) - Date.parse(left.lastUpdated),
  ),
);
</script>

<template>
  <ul class="mt-6 space-y-4">
    <li
      v-for="(snippet, index) in sortedSnippets"
      :key="snippet.path"
      class="wobbly group p-4"
      :class="index % 2 === 0 ? 'tilt-r' : 'tilt-l'"
    >
      <NuxtLink :to="snippet.path" class="flex flex-row items-center justify-between gap-4">
        <div>
          <div class="font-bold">
            {{ snippet.title }}
            <span class="ml-3 font-mono text-xs text-dimmed">{{ snippet.language }}</span>
          </div>
          <p class="mt-1 text-sm text-muted">{{ snippet.description }}</p>
        </div>
        <UIcon
          name="ri:arrow-up-s-line"
          mode="svg"
          class="size-5 rotate-90 text-dimmed transition-all duration-200 group-hover:translate-x-1 group-hover:text-highlighted"
        />
      </NuxtLink>
    </li>
  </ul>
</template>
