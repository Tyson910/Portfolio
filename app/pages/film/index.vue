<script setup lang="ts">
import type { PhotosCollectionItem } from "@nuxt/content";

const { share, isSupported } = useShare();

const { data: photos } = await useAsyncData("all-photos", () => {
  return queryCollection("photos").order("date", "ASC").all();
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
      class="bg-white dark:bg-slate-600 h-max shadow-md rounded-lg overflow-hidden transition hover:shadow-xl px-5 pt-6"
      :class="{'row-span-2 h-max my-auto': photo.isPotraitOrientation }"
    >
      <img
        :src="photo.src"
        loading="lazy"
        :alt="photo.title"
        class="rounded-sm bg-gray-200 object-cover group-hover:opacity-75"
      />
      <!-- TODO use nuxt image -->
      <!-- <NuxtImg
        placeholder="https://placehold.co/400x400"
        :src="photo.src"
        :alt="photo.title"
      /> -->
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
            <span v-if="detail.name == 'date'">
              {{
                new Date(photo.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })
              }}
            </span>
            <span v-else>
              {{ photo[detail.name] }}
            </span>
          </div>
          <div class="flex flex-col items-center pt-3 rounded-lg gap-y-3">
            <UButton label="View Details" block :to="photo.stem" />
            <UButton
              v-if="isSupported"
              label="Share"
              variant="outline"
              block
              @click="
                share({
                  url: photo.stem,
                  title: photo.title,
                  text: 'Check out this amazing photograph!',
                })
              "
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
