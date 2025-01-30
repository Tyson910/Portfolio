<script setup lang="ts">
import type { PhotosCollectionItem } from "@nuxt/content";

const { data: photos } = await useAsyncData("all-photos", () => {
  return queryCollection("photos").order('date', 'ASC').all();
});

const cardDetailFields = [
  {
    name: "location",
    Icon: "ri:map-pin-2-line",
  },
  {
    name: "date",
    Icon: "ri:calendar-line",
  },
  {
    name: "filmType",
    Icon: "ri:film-line",
  },
] as const satisfies {
  name: keyof PhotosCollectionItem;
  Icon: string;
}[];
</script>

<template>
  <main
    class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-6"
  >
    <div
      v-for="photo in photos"
      :key="photo.id"
      class="bg-white dark:bg-slate-600 shadow-md rounded-lg overflow-hidden transition hover:shadow-xl px-5 pt-6"
    >
      <!-- height > width && 'row-span-2 h-max my-auto,' -->
      <img
        :src="photo.src"
        loading="lazy"
        :alt="photo.title"
        class="rounded-sm bg-gray-200 object-cover group-hover:opacity-75"
      />
      <!-- TODO: add 404 image here  -->
      <div class="p-4">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-50">
          {{ photo.title }}
        </h2>
        <div class="mt-2 space-y-1">
          <div
            v-for="detail in cardDetailFields"
            :icon-name="detail.Icon"
            :key="detail.name"
            class="flex items-center text-sm text-gray-600 dark:text-gray-100"
          >
            <Icon :name="detail.Icon" class="mr-2 size-4 text-gray-500" />
            <span>
              {{ photo[detail.name] }}
            </span>
          </div>
          <div
            class="w-full flex items-center justify-between whitespace-nowrap pt-3 rounded-lg gap-x-5 transition -20"
          >
            <!-- <ShareButton
                photo={{ id, data: photo }}
                className="w-max flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
              /> -->
            <!-- <a
              :href="`/film/post/${id}`"
              class="w-max flex items-center justify-center bg-gray-50 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              <Link2Icon class="mr-2 size-3.5 lg:size-5" />
              View Details
            </a> -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
