<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  dateCreated: string;
  lastUpdated: string;
  tags: string[];
}>();
</script>

<template>
  <UContainer as="article" class="pt-4">
    <header class="mb-10 mt-16">
      <h1 class="font-display text-5xl leading-tight text-highlighted">{{ title }}</h1>
      <p class="mt-4 text-xl text-muted">{{ description }}</p>
      <div
        class="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-dimmed"
      >
        <div class="flex items-center gap-2">
          <UIcon name="ri:calendar-line" mode="svg" class="size-4" />
          <FormattedDate :date="dateCreated" />
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="ri:refresh-line" mode="svg" class="size-4" />
          <span>Updated: <FormattedDate :date="lastUpdated" /></span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="ri:price-tag-3-line" mode="svg" class="size-4" />
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in tags" :key="tag" class="text-primary">{{ tag }}</span>
          </div>
        </div>
      </div>
      <div class="squiggle-line mt-8" aria-hidden="true"></div>
    </header>
    <div class="article-content mx-auto max-w-prose pb-16">
      <slot />
    </div>
  </UContainer>
</template>

<style scoped>
.article-content {
  color: var(--ui-text);
  font-size: var(--text-lg);
  line-height: 1.75;
}

.article-content :deep(.expressive-code) {
  margin-block: calc(var(--spacing) * 4);
}

.article-content :deep(:where(h2, h3, h4)) {
  color: var(--ui-text-highlighted);
  font-family: var(--font-display);
  font-weight: var(--heading-weight);
  text-transform: var(--heading-transform);
  letter-spacing: var(--heading-tracking);
  line-height: 1.25;
  margin-block: 1.75em 0.75em;
}

.article-content :deep(h2) {
  font-size: var(--text-4xl);
}

.article-content :deep(h3) {
  font-size: var(--text-3xl);
}

.article-content :deep(h4) {
  font-size: var(--text-2xl);
}

.article-content :deep(:where(p, ul, ol, blockquote)) {
  margin-block: 1.25em;
}

.article-content :deep(:where(ul, ol)) {
  padding-inline-start: 1.5em;
}

.article-content :deep(ul) {
  list-style: none;
}

.article-content :deep(ul > li)::before {
  content: var(--list-marker);
  color: var(--ui-text-dimmed);
  margin-inline-start: -1.5em;
  padding-inline-end: 0.25em;
}

.article-content :deep(ol) {
  list-style: decimal;
}

.article-content :deep(a) {
  color: var(--ui-primary);
  text-decoration: underline;
  text-decoration-style: var(--link-decoration);
  text-decoration-thickness: 1.5px;
  text-underline-offset: 4px;
}

.article-content :deep(a:hover) {
  color: var(--ui-text-highlighted);
  text-decoration-color: var(--ui-text-highlighted);
}

.article-content :deep(blockquote) {
  border: var(--frame-border);
  border-radius: var(--frame-radius);
  padding: 0.5rem 1.25rem;
}

.article-content :deep(:not(pre) > code) {
  border: var(--inline-code-border);
  border-radius: var(--inline-code-radius);
  background: var(--ui-bg-elevated);
  color: var(--ui-text-highlighted);
  font-family: var(--code-font);
  padding: 0.125em 0.35em;
}

.article-content :deep(p:has(+ .expressive-code)) {
  margin-block-end: calc(var(--spacing) * 3);
}

.article-content :deep(.expressive-code + p) {
  margin-block-start: calc(var(--spacing) * 3);
}

/* Twoslash is rendered at build time; these states replace its optional client runtime. */
.article-content :deep(.twoslash-popup-container) {
  display: none;
  inset-block-start: 100%;
  inset-inline-start: 0;
  max-width: min(600px, calc(100vw - 2rem));
  border: var(--frame-border);
  border-radius: var(--frame-radius-alt);
  font-family: var(--code-font);
}

.article-content :deep(.twoslash-hover:hover > .twoslash-popup-container),
.article-content :deep(.twoslash-hover:focus > .twoslash-popup-container),
.article-content :deep(.twoslash-hover:focus-within > .twoslash-popup-container) {
  display: block;
}

.article-content :deep(.twoslash-hover:focus-visible) {
  border-radius: 0.125rem;
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
</style>
