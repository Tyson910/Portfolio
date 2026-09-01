<script setup lang="ts">
const props = defineProps<{ error: { statusCode?: number } }>();
usePageSeo("Page Not Found", "Page not found");
</script>

<template>
  <UApp>
    <SiteHeader />
    <main class="flex-1">
      <NotFoundContent v-if="props.error?.statusCode === 404" />
    </main>
    <SiteFooter />
  </UApp>
</template>
