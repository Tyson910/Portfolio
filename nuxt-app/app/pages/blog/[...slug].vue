<script setup lang="ts">
const route = useRoute();
const slug = Array.isArray(route.params.slug) ? route.params.slug.join("/") : route.params.slug;
const path = `/blog/${slug}`;
const post = await queryCollection("blog").path(path).first();

if (!post || (!import.meta.dev && post.isDraft)) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}

usePageSeo(post.title, post.description);
</script>

<template>
  <PostLayout
    :title="post.title"
    :description="post.description"
    :date-created="post.dateCreated"
    :last-updated="post.lastUpdated"
    :tags="post.tags"
  >
    <ContentRenderer :value="post" :prose="false" />
  </PostLayout>
</template>
