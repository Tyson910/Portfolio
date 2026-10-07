<script setup lang="ts">
const month = new Date().getMonth();
const image = month === 9 || month === 10 ? "/images/scarecrow404.svg" : "/images/astronaut404.svg";
</script>

<template>
  <article class="pb-20 pt-10 md:pb-36 md:pt-5">
    <div class="mx-auto w-96 self-center md:w-[32rem] lg:w-[42rem]">
      <img :src="image" alt="" />
    </div>
    <div class="flex flex-col gap-y-10">
      <h1
        class="font-display mx-auto flex max-w-max flex-col text-center text-4xl text-highlighted sm:text-6xl"
      >
        This page could not be found.
      </h1>
      <NuxtLink
        to="/"
        class="wobbly mx-auto bg-default px-6 py-2.5 font-bold transition-colors hover:bg-elevated"
      >
        &larr; back home
      </NuxtLink>
    </div>
  </article>
</template>
