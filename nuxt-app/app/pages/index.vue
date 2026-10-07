<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";

import { homeBlogPostsQueryOptions, homeSnippetsQueryOptions } from "~/utils/query-options";
import { socialLinks } from "~/utils/social-links";

usePageSeo("Homepage", "Learn about Tyson Suttle");

const blogQuery = useQuery(homeBlogPostsQueryOptions(import.meta.dev));
const snippetsQuery = useQuery(homeSnippetsQueryOptions(import.meta.dev));

onServerPrefetch(blogQuery.suspense);
onServerPrefetch(snippetsQuery.suspense);

const universityPosts = computed(
  () => blogQuery.data.value?.filter((post) => post.tags.includes("TypeScript University")) ?? [],
);
const snippetPosts = computed(() => snippetsQuery.data.value ?? []);
</script>

<template>
  <UContainer as="main" class="py-16">
    <div class="pb-20">
      <div class="max-w-2xl">
        <h1 class="font-display mt-2 text-5xl leading-tight sm:text-6xl">
          Hi, I'm <span class="marker-highlight">Tyson Suttle</span>.
        </h1>

        <p class="mt-6 text-lg text-muted">
          I'm a Full Stack Software Developer based in Phoenix, Arizona.
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-4">
          <span class="font-display text-xl text-dimmed">~ find me online ~</span>
          <a
            v-for="(link, index) in socialLinks"
            :key="link.href"
            :href="link.href"
            class="wobbly group inline-flex items-center gap-2 bg-default px-3 py-1.5"
            :class="index % 2 === 0 ? 'tilt-l' : 'tilt-r'"
          >
            <UIcon
              :name="link.icon"
              mode="svg"
              class="size-5 text-dimmed transition-colors group-hover:text-highlighted"
            />
            <span
              class="font-display text-xl lowercase text-dimmed transition-colors group-hover:text-highlighted"
            >
              {{ link.label }}
            </span>
          </a>
        </div>
      </div>
    </div>

    <section>
      <h2 class="font-display text-3xl">
        <span class="squiggle">01 · TypeScript University</span>
      </h2>
      <BlogList :posts="universityPosts" />
    </section>
    <section class="mt-16">
      <div class="flex flex-wrap items-baseline justify-between gap-2">
        <h2 class="font-display text-3xl"><span class="squiggle">02 · Code Snippets</span></h2>
        <UButton to="/snippets" label="view all →" variant="link" size="lg" />
      </div>
      <SnippetList :snippets="snippetPosts" />
    </section>
    <section id="projects" class="mt-16">
      <h2 class="font-display text-3xl"><span class="squiggle">03 · Projects</span></h2>
      <ProjectList />
    </section>
  </UContainer>
</template>
