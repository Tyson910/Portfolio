<script setup lang="ts">
import Footer from "~/components/Footer.vue";

const route = useRoute();
const { share, isSupported } = useShare();

const { data: photo } = await useAsyncData(route.path, () => {
  return queryCollection("photos")
    .where("stem", "=", route.path.slice(1))
    .first();
});

const links = [
  {
    label: "Home",
    icon: "i-ri-home-4-line",
    to: "/",
  },
  {
    label: "Film Hub",
    icon: "i-ri-film-line",
    to: "/film",
  },
  {
    label: photo.value?.title || "Photo",
    to: route.path,
  },
];
</script>

<template>
  <div>
    <!-- Header with breadcrumbs and share buttons  -->
    <div class="sticky top-0 bg-gray-50 shadow-sm">
      <div class="max-w-5xl mx-auto p-4 flex items-center justify-between">
        <div>
          <UBreadcrumb :links="links" />
        </div>

        <UButton
          v-if="isSupported"
          label="Share"
          @click="
            share({
              url: useRequestURL().toString(),
              title: photo?.title,
              text: 'Check out this amazing photograph!',
            })
          "
        />
      </div>
    </div>
    <div class="py-10">
      <slot />
    </div>
    <Footer />
  </div>
</template>
