<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("snippets").path(route.path).first();
});

useSeoMeta(page.value?.seo || {});
</script>

<template>
  <section>
    <UContainer v-if="page" class="pb-24">
      <div class="border-b border-gray-200 pb-5 mb-16">
        <h1 class="text-base font-semibold text-gray-900">{{ page.title }}</h1>
        <p class="mt-2 max-w-4xl text-sm text-gray-500">
          Last updated:
          <NuxtTime
            :datetime="page.dateCreated"
            year="numeric"
            month="long"
            day="numeric"
          />
        </p>
      </div>
      <ContentRenderer :value="page" />
    </UContainer>
  </section>
</template>
