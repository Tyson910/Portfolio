<script setup lang="ts">
usePageSeo(
  "Blog",
  "Writing about TypeScript, full-stack architecture, and lessons learned in production.",
);

const allPosts = await queryCollection("blog").all();
const posts = import.meta.dev ? allPosts : allPosts.filter((post) => !post.isDraft);
</script>

<template>
  <UContainer as="main" class="py-16">
    <div>
      <h1 class="font-hand text-4xl"><span class="squiggle">Blog</span></h1>
      <p class="mt-4 max-w-2xl text-muted">
        Writing about TypeScript, full-stack architecture, and lessons learned in production.
      </p>
    </div>
    <BlogList :posts="posts" />
  </UContainer>
</template>
