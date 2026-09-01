<script setup lang="ts">
const route = useRoute();
const slug = Array.isArray(route.params.slug) ? route.params.slug.join("/") : route.params.slug;
const path = `/snippets/${slug}`;
const snippet = await queryCollection("snippets").path(path).first();

if (!snippet || (!import.meta.dev && snippet.draft)) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}

usePageSeo(snippet.title, snippet.description);
</script>

<template>
  <PostLayout
    :title="snippet.title"
    :description="snippet.description"
    :date-created="snippet.dateCreated"
    :last-updated="snippet.lastUpdated"
    :tags="snippet.tags"
  >
    <ContentRenderer :value="snippet" :prose="false" />
  </PostLayout>
</template>
