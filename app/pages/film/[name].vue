<script setup lang="ts">
const route = useRoute();

definePageMeta({
  layout: "film-detail",
  validate: async (route) => {
    if (typeof route.params.name != "string") return false;
    const photo = await queryCollection("photos").path(route.path).first();
    // Check if the photo exists in collection
    return !!photo.id;
  },
});

const { data: photo } = await useAsyncData(route.path, () => {
  return queryCollection("photos").path(route.path).first();
});

useSeoMeta({
  title: photo.value?.title,
  description: photo.value?.description || null,
  ogTitle: photo.value?.title,
  ogDescription: photo.value?.description || null,
  ogImage: { url: photo.value?.src },
});
</script>

<template>
  <div v-if="photo">
    <!--  Mobile-first layout  -->
    <div class="max-w-6xl mx-auto">
      <!--  Image Container - Optimized for mobile  -->
      <div
        class="w-full bg-white flex items-center justify-center overflow-hidden mt-8"
      >
        <img
          :src="photo.src"
          :alt="photo.title"
          class="w-full h-full object-contain"
        />
      </div>

      <!--  Content Container  -->
      <div class="px-4 py-6 space-y-6">
        <h1 class="text-2xl font-bold">{{ photo.title }}</h1>

        <!-- Details Grid  -->
        <div class="grid grid-cols-2 gap-4">
          <PhotoDetail icon="ri:map-pin-2-line">
            {{ photo.location }}
          </PhotoDetail>
          <PhotoDetail icon="ri:calendar-line">
            {{
              new Date(photo.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })
            }}
          </PhotoDetail>
          <PhotoDetail icon="ri:film-line">
            <span>{{ photo.filmType }}</span>
          </PhotoDetail>
        </div>

        <!-- Photo Story  -->
        <div>
          <p class="text-sm text-gray-700">{{ photo.description }}</p>
        </div>

        <!-- Action Buttons  -->
        <!-- <div class="space-y-4">
            <button
              class="w-full flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              <DownloadIcon class="mr-2" />
              Download High-Res
            </button>
          </div> -->
      </div>
    </div>
  </div>
</template>
