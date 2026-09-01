<script setup lang="ts">
usePageSeo("Code Snippets", "This is a hub for all snippets I've created");

const allSnippets = await queryCollection("snippets").all();
const snippets = import.meta.dev ? allSnippets : allSnippets.filter((snippet) => !snippet.draft);
</script>

<template>
  <UContainer as="main" class="py-12">
    <div>
      <h1 class="font-hand text-4xl mb-8"><span class="squiggle">Code Snippets</span></h1>
    </div>
    <SnippetList :snippets="snippets" />
  </UContainer>
</template>
