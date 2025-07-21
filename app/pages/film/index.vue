<script setup lang="ts">
import { z } from "zod/v4";
import PhotoDetail from "~/components/PhotoDetail.vue";
import PhotoSort from "~/components/PhotoSort.vue";

const queryParamSchema = z.object({
  method: z
    .enum(["asc", "desc"])
    .transform((val) => val.toUpperCase() as Uppercase<typeof val>),
  field: z.enum(["date", "title"]),
});

useSeoMeta({
  description:
    "This is a hub for all film photography related content I've created",
  ogDescription:
    "This is a hub for all film photography related content I've created",
  ogUrl: "https://tyson-suttle.com/film",
  ogTitle: "Welcome to my Film Page",
  title: "Welcome to my Film Page",
});

const { share, isSupported } = useShare();
const route = useRoute();

const { data: photos, refresh } = await useAsyncData("all-photos", () => {
  const queryParamResult = queryParamSchema.safeParse(route.query);

  if (!queryParamResult.success) {
    return queryCollection("photos")
      .order("date", "DESC")
      .order("id", "DESC")
      .all();
  }
  const { method, field } = queryParamResult.data;
  return queryCollection("photos").order(field, method).all();
});

const { currentPage, currentPageSize, pageCount } = useOffsetPagination({
  total: photos.value?.length,
  page: Number(useRoute().query?.page) || 1,
  pageSize: 10,
  onPageChange: async (v) => {
    await navigateTo({
      query: {
        page: v.currentPage,
      },
      hash: "#links",
    });
  },
});

const paginatedPhotos = computed(() => {
  if (!photos.value) return [];
  const start = currentPageSize.value * (currentPage.value - 1);
  const end = start + currentPageSize.value;
  return photos.value.slice(start, end);
});
</script>

<template>
  <div v-if="photos">
    <div class="text-center mb-8 px-5 md:px-0">
      <h1
        class="text-2xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-4"
      >
        Film Photography Journal
      </h1>
      <p class="text-gray-500 dark:text-zinc-200">
        Capturing moments on film, one frame at a time. Exploring the world
        through my lens and sharing stories beyond pixels.
      </p>
    </div>

    <div
      class="px-5 py-3 flex justify-end md:max-w-7xl md:mx-auto border-t border-b border-gray-100"
    >
      <PhotoSort
        :handle-click="
          async (field, method) => {
            await navigateTo({
              query: {
                field,
                method,
              },
            });
            await refresh();
          }
        "
      />
    </div>

    <main
      id="links"
      class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-6 scroll-mt-10 mt-10"
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
          class="rounded-sm object-cover group-hover:opacity-75 bg-(--ui-bg-elevated)"
          :class="photo.isPotraitOrientation ? 'min-h-135' : 'min-h-64'"
        />
        <div class="p-4">
          <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-50">
            {{ photo.title }}
          </h2>
          <div class="mt-2 space-y-1">
            <PhotoDetail icon="ri:map-pin-2-line">
              {{ photo.location }}
            </PhotoDetail>
            <PhotoDetail icon="ri:calendar-line">
              <NuxtTime :datetime="photo.date" year="numeric" month="long" />
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
      v-model:page="currentPage"
      :total="photos.length"
      :page-count="pageCount"
      :items-per-page="currentPageSize"
      size="xl"
    />
  </div>
</template>
