<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";

import { projectsQueryOptions } from "~/utils/query-options";

const projectsQuery = useQuery(projectsQueryOptions());

onServerPrefetch(projectsQuery.suspense);

const { data: projects, error: projectsError, isPending } = projectsQuery;
</script>

<template>
  <ul
    v-if="isPending"
    class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"
    aria-label="Loading projects"
  >
    <li v-for="index in 4" :key="index" class="wobbly flex min-h-40 flex-col p-5">
      <div class="flex items-start justify-between gap-4">
        <USkeleton class="h-5 w-2/5" />
        <div class="flex gap-2">
          <USkeleton class="size-8 rounded-md" />
          <USkeleton class="size-8 rounded-md" />
        </div>
      </div>
      <div class="mt-4 space-y-2">
        <USkeleton class="h-4 w-full" />
        <USkeleton class="h-4 w-3/4" />
      </div>
      <div class="mt-auto flex gap-4 pt-5">
        <USkeleton class="h-3 w-20" />
        <USkeleton class="h-3 w-16" />
        <USkeleton class="h-3 w-14" />
      </div>
    </li>
  </ul>

  <p v-else-if="projectsError" class="mt-6 text-error">Projects are temporarily unavailable.</p>

  <ul v-else-if="projects?.length" class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
    <li
      v-for="(project, index) in projects"
      :key="project.name"
      class="wobbly flex flex-col p-5"
      :class="index % 2 === 0 ? 'tilt-l' : 'tilt-r'"
    >
      <div class="flex flex-1 flex-col gap-3">
        <div class="flex items-start justify-between gap-2">
          <h3 class="leading-snug font-semibold text-highlighted">{{ project.name }}</h3>
          <div class="flex shrink-0 gap-1">
            <UButton
              v-if="project.sourceCodeURL"
              :to="project.sourceCodeURL"
              target="_blank"
              rel="noreferrer"
              color="neutral"
              variant="ghost"
              size="sm"
              :aria-label="`View ${project.name} source code`"
            >
              <UIcon name="ri:github-fill" mode="svg" class="size-4" />
            </UButton>
            <UButton
              v-if="project.deployURL"
              :to="project.deployURL"
              target="_blank"
              rel="noreferrer"
              color="neutral"
              variant="ghost"
              size="sm"
              :aria-label="`View ${project.name} live site`"
            >
              <UIcon name="ri:global-line" mode="svg" class="size-4" />
            </UButton>
          </div>
        </div>

        <p class="line-clamp-2 text-sm text-muted">{{ project.description }}</p>

        <ul
          v-if="project.languages.length"
          class="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-2 text-xs text-muted"
        >
          <li
            v-for="language in project.languages"
            :key="language.name"
            class="flex items-center gap-1.5"
          >
            <span
              aria-hidden="true"
              class="inline-block size-2.5 shrink-0 rounded-full"
              :style="{ backgroundColor: getLanguageColor(language.name) }"
            />
            <span>{{ language.name }}</span>
            <span class="text-dimmed">{{ language.percentage }}%</span>
          </li>
        </ul>
      </div>
    </li>
  </ul>

  <p v-else class="mt-6 text-muted">No portfolio projects are currently published.</p>
</template>
