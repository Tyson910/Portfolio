<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
const today = new Date();
</script>
<template>
  <div>
    <article
      v-if="props.error?.statusCode == 404"
      class="pt-10 md:pt-5 pb-20 md:pb-36"
    >
      <div class="w-96 md:w-[32rem] lg:w-[42rem] mx-auto self-center">
        <!-- // show scarecrow during October or November only -->
        <NuxtImg
          loading="lazy"
          :src="
            today.getMonth() == 9 || today.getMonth() == 10
              ? '/img/icons/scarecrow404.svg'
              : '/img/icons/astronaut404.svg'
          "
          alt="404"
        />
      </div>
      <div class="flex flex-col gap-y-10">
        <h1
          class="text-purple-shade-5 text-4xl sm:text-5xl flex flex-col max-w-max mx-auto text-center font-medium"
        >
          This page could not be found.
        </h1>
        <UButton
          to="/"
          size="xl"
          class="max-w-max mx-auto hover:underline"
          label="Home"
        />
      </div>
    </article>
  </div>
</template>
