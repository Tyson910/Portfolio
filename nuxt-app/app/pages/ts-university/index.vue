<script setup lang="ts">
usePageSeo("TypeScript University", "Master TypeScript through structured lessons and tutorials.");

const allPosts = await queryCollection("blog").all();
const posts = allPosts.filter(
  (post) => post.tags.includes("TypeScript University") && (import.meta.dev || !post.isDraft),
);
const upcomingLessons = [
  {
    title: "Conditional Types",
    description:
      "Write types that branch based on other types using extends and infer — the foundation of most advanced utility types.",
    difficulty: "Foundational",
    lessonType: "tutorial",
  },
  {
    title: "Mapped Types",
    description:
      "Transform existing types by iterating over their keys. Build flexible type transformations without repeating yourself.",
    difficulty: "Foundational",
    lessonType: "tutorial",
  },
  {
    title: "Utility Types",
    description:
      "Master the built-in utility types — Pick, Omit, Partial, Required, ReturnType, and more — with real use cases.",
    difficulty: "Foundational",
    lessonType: "reference",
  },
  {
    title: "Zod for Runtime Validation",
    description:
      "Bridge compile-time and runtime safety with Zod. Parse external data with schemas that mirror your TypeScript types.",
    difficulty: "Advanced",
    lessonType: "tutorial",
  },
];
</script>

<template>
  <UContainer as="main" class="py-16">
    <div>
      <h1 class="font-display text-4xl"><span class="squiggle">TypeScript University</span></h1>
      <p class="mt-4 max-w-2xl text-muted">
        Master TypeScript through structured lessons. From foundational concepts to advanced
        patterns, build your expertise step by step.
      </p>
    </div>
    <BlogList :posts="posts" />

    <section class="mt-16">
      <div>
        <h2 class="font-display text-3xl"><span class="squiggle">Coming Soon</span></h2>
        <p class="font-display mt-3 text-lg text-dimmed">~ lessons in progress ~</p>
      </div>
      <div class="grid grid-cols-1 gap-4 pt-6 md:grid-cols-2">
        <article
          v-for="lesson in upcomingLessons"
          :key="lesson.title"
          class="wobbly-dashed p-5 text-muted"
        >
          <div class="flex items-start justify-between gap-3">
            <h3 class="text-lg font-semibold text-highlighted">{{ lesson.title }}</h3>
            <UBadge label="Coming Soon" color="neutral" variant="outline" />
          </div>
          <p class="mt-3 text-sm text-muted">{{ lesson.description }}</p>
          <div class="mt-4 flex gap-2 text-xs text-dimmed">
            <span>{{ lesson.difficulty }}</span>
            <span>{{ lesson.lessonType }}</span>
          </div>
        </article>
      </div>
    </section>
  </UContainer>
</template>
