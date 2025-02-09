<script setup lang="ts">
import type { DropdownItem } from "#ui/types";
import PhotoDetail from "~/components/PhotoDetail.vue";

useSeoMeta({
  description:
    "This is a hub for all film photography related content I've created",
  title: "Welcome to my Film Page",
});

const { share, isSupported } = useShare();
const route = useRoute();

const { data: photos, refresh } = await useAsyncData("all-photos", () => {
  return queryCollection("photos")
    .order(
      route.query?.field?.toString() || "date",
      route.query.method?.toString().toUpperCase() || "DESC"
    )
    .all();
});

const { currentPage, currentPageSize } = useOffsetPagination({
  total: photos.value?.length,
  page: Number(useRoute().query?.page) || 1,
  pageSize: 6,
  onPageChange: async (v) => {
    await navigateTo({
      query: {
        page: v.currentPage,
      },
      hash: "#links",
    });
  },
});

const paginatedPhotos = computed(() =>
  photos.value?.slice(
    currentPageSize.value * (currentPage.value - 1),
    currentPageSize.value * (currentPage.value - 1) + currentPageSize.value
  )
);

async function addSortParam(field: "title" | "date", method: "asc" | "desc") {
  await navigateTo({
    query: {
      field,
      method,
    },
  });
  await refresh();
}

const items = [
  [
    {
      label: "Newest",
      icon: "i-ri-sort-desc",
      click: async () => {
        await addSortParam("date", "desc");
      },
    },
    {
      label: "Oldest",
      icon: "i-ri-sort-asc",
      click: async () => {
        await addSortParam("date", "asc");
      },
    },
  ],
  [
    {
      label: "Name (Asc)",
      icon: "i-ri-sort-alphabet-asc",
      click: async () => {
        await addSortParam("title", "asc");
      },
    },
    {
      label: "Name (Desc)",
      icon: "i-ri-sort-alphabet-desc",
      click: async () => {
        await addSortParam("title", "desc");
      },
    },
  ],
] as const satisfies DropdownItem[][];
</script>

<template>
  <div v-if="photos">
    <div class="text-center mb-8 px-5 md:px-0">
      <h1 class="text-2xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
        Film Photography Journal
      </h1>
      <p class="text-gray-500 dark:text-zinc-200">
        Capturing moments on film, one frame at a time. Exploring the world
        through my lens and sharing stories beyond pixels.
      </p>
    </div>



    <div class="px-5 flex justify-end">
      <UDropdown :items="items">
        <UButton
          color="white"
          label="Sort By"
          trailing-icon="i-ri-arrow-down-s-line"
        />
      </UDropdown>
    </div>

    <main
      id="links"
      class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-6 scroll-mt-10 mt-10 md:mt-0"
    >
      <div
        v-for="photo in paginatedPhotos"
        :key="photo.id"
        class="bg-white dark:bg-slate-600 h-max shadow-md rounded-lg overflow-hidden transition hover:shadow-xl md:px-5 md:pt-6 mx-5 md:mx-0"
        :class="{ 'row-span-2 h-max my-auto': photo.isPotraitOrientation }"
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
              {{ photo.filmType }}
            </PhotoDetail>
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
    <UPagination
      class="mx-auto max-w-max mt-16"
      v-model="currentPage"
      :total="photos.length"
      :page-count="currentPageSize"
    />
  </div>
</template>
