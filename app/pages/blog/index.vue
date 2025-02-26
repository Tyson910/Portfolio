<script setup lang="ts">
useSeoMeta({
  description: "This is a hub for all Tech related content I've created",
  title: "Welcome to my Blog",
});
const { data: featuredSnippets } = await useAsyncData(
  "featured-snippets",
  () => {
    return queryCollection("snippets").all();
  }
);
</script>
<template>
  <div>
    <UContainer class="flex flex-col">
      <div class="flex flex-col border-b border-zinc-200 py-5">
        <h2 class="font-bold text-4xl text-zinc-900 dark:text-zinc-50">
          Code Snippets
        </h2>
        <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-200">
          Code snippets I find myself using often that are easy to copy & paste.
        </p>
      </div>
      <div class="flex flex-col gap-16">
        <ul role="list" class="divide-y divide-zinc-100">
          <li v-for="snippet in featuredSnippets">
            <SnippetDetail :snippet="snippet" />
          </li>
        </ul>
      </div>
    </UContainer>
  </div>
</template>
