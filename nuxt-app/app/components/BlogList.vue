<script setup lang="ts">
type BlogPost = {
  path: string;
  title: string;
  description: string;
  dateCreated: string;
};

const props = defineProps<{ posts: BlogPost[] }>();
const sortedPosts = computed(() =>
  [...props.posts].sort(
    (left, right) => Date.parse(right.dateCreated) - Date.parse(left.dateCreated),
  ),
);
</script>

<template>
  <ul class="mt-6 space-y-4">
    <li
      v-for="(post, index) in sortedPosts"
      :key="post.path"
      class="wobbly group p-4"
      :class="index % 2 === 0 ? 'tilt-l' : 'tilt-r'"
    >
      <NuxtLink :to="post.path" class="flex flex-row items-center justify-between gap-4">
        <div>
          <div class="font-bold">
            {{ post.title }}
            <span class="ml-3 font-mono text-xs text-dimmed">
              <FormattedDate :date="post.dateCreated" />
            </span>
          </div>
          <p class="mt-1 text-sm text-muted">{{ post.description }}</p>
        </div>
        <UIcon
          name="ri:arrow-up-s-line"
          mode="svg"
          class="size-5 rotate-90 text-dimmed transition-all duration-200 group-hover:translate-x-1 group-hover:text-highlighted"
        />
      </NuxtLink>
    </li>
  </ul>
</template>
