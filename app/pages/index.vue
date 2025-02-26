<script setup lang="ts">
import SnippetDetail from "~/components/SnippetDetail.vue";
import { socialLinks } from "~/utils/social-links";

useSeoMeta({
  title: "Tyson Suttle",
  description: "Learn about Tyson Suttle",
});

const { data: projects } = await useAsyncData("projects", () => {
  return queryCollection("projects").all();
});

const { data: featuredSnippets } = await useAsyncData(
  "featured-snippets",
  () => {
    return queryCollection("snippets").all();
  }
);
</script>

<template>
  <UContainer>
    <div class="pt-10">
      <div class="max-w-2xl">
        <h1
          class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
        >
          Hi, I'm Tyson Suttle
        </h1>
        <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I'm a Full Stack Software Developer based in Phoenix, Arizona.
        </p>
        <div class="mt-6 flex gap-6">
          <a
            v-for="{ ariaLabel, href, Icon } in socialLinks"
            :key="href"
            class="group -m-1 p-1"
            :href="href"
            :aria-label="ariaLabel"
          >
            <Icon
              :name="Icon"
              class="size-6 text-zinc-500 transition group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="py-16 grid grid-cols-1 lg:grid-cols-2 gap-x-16">
      <div>
        <div class="border-b border-zinc-200 py-5">
          <div
            class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap"
          >
            <div class="ml-4 mt-4">
              <h2
                class="text-base font-semibold text-zinc-900 dark:text-zinc-50"
              >
                Code Snippets
              </h2>
              <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-200">
                Code snippets I find myself using often that are easy to copy &
                paste.
              </p>
            </div>
          </div>
        </div>
        <ul role="list" class="divide-y divide-zinc-100">
          <li v-for="snippet in featuredSnippets">
            <SnippetDetail :snippet="snippet" />
          </li>
          <li class="pl-4 pt-4 shrink-0 text-center dark:text-zinc-200">
            <NuxtLink href="/blog" class="underline">View All Posts</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <div class="border-b border-zinc-200 py-5">
          <div
            class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap"
          >
            <div class="ml-4 mt-4">
              <h2
                class="text-base font-semibold text-zinc-900 dark:text-zinc-50"
              >
                Projects
              </h2>
              <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-200">
                Take a look at what I'm currently working on
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-16">
          <ul role="list" class="divide-y divide-zinc-100">
            <li
              v-for="{
                name,
                sourceCodeURL,
                deployURL,
                description,
                techUsed,
              } in projects"
            >
              <div class="flex gap-x-4 py-5 md:p-5">
                <div class="flex flex-col text-sm/6 gap-y-2">
                  <div
                    class="flex flex-row items-center gap-x-3 font-semibold text-zinc-900 dark:text-zinc-50"
                  >
                    <p>{{ name }}</p>
                    <UButton
                      v-if="sourceCodeURL"
                      :to="sourceCodeURL"
                      aria-label="Source Code"
                      icon="i-ri-github-fill"
                      variant="ghost"
                      size="sm"
                      color="neutral"
                      :padded="false"
                    />
                    <UButton
                      :to="deployURL"
                      aria-label="Source Code"
                      icon="i-ri-external-link-line"
                      variant="ghost"
                      size="sm"
                      color="neutral"
                      :padded="false"
                    />
                  </div>
                  <div
                    class="flex flex-col md:flex-row gap-2 whitespace-nowrap"
                  >
                    <span
                      v-for="tag in techUsed"
                      class="w-max inline-flex items-center rounded-full bg-zinc-50 px-2 py-0.5 text-xs font-medium text-zinc-600 ring-1 ring-inset ring-zinc-500/10"
                    >
                      {{ tag }}
                    </span>
                  </div>
                  <p class="mt-1 text-sm/6 text-zinc-600 dark:text-zinc-50">
                    {{ description }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </UContainer>
</template>
