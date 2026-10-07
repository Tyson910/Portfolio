<script setup lang="ts">
import { usePreferredReducedMotion, useStorage } from "@vueuse/core";

const themes = [
  { label: "Hand-drawn", value: "hand-drawn" },
  { label: "Swiss", value: "swiss" },
  { label: "Neobrutalism", value: "neobrutalism" },
  { label: "Maximalism", value: "maximalism" },
];

// Display fonts for non-default themes; the link is managed reactively by useHead.
const fontHrefs = {
  swiss: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;700;900&display=swap",
  neobrutalism: "https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap",
  maximalism: "https://fonts.googleapis.com/css2?family=Bungee&display=swap",
} as const satisfies Record<string, string>;

// Synced to localStorage by useStorage. initOnMounted defers the stored read
// until after mount, so SSR and the first client render both use the default
// theme and hydration can't mismatch; unhead then applies the restored choice.
const active = useStorage<keyof typeof fontHrefs | "hand-drawn">(
  "site-theme",
  "hand-drawn",
  undefined,
  {
    initOnMounted: true,
  },
);

const themeHref = computed((): string | null =>
  active.value === "hand-drawn" ? null : fontHrefs[active.value],
);

useHead({
  htmlAttrs: { "data-theme": active },
  link: () =>
    themeHref.value ? [{ id: "theme-fonts", rel: "stylesheet", href: themeHref.value }] : [],
});

// Reactive reduced-motion preference (re-checked live, unlike a one-shot matchMedia read).
const reducedMotion = usePreferredReducedMotion();

/*
 * Commit a theme choice inside a View Transition so the whole-page restyle
 * crossfades instead of snapping. Falls back to an instant swap when the API
 * is unavailable or the user prefers reduced motion.
 */
function commitTheme(value: string) {
  if (typeof document.startViewTransition !== "function" || reducedMotion.value === "reduce") {
    active.value = value as typeof active.value;
    return;
  }

  document.startViewTransition(async () => {
    // Set the attribute directly so the transition's "new" snapshot captures
    // the target theme even if unhead patches the head a tick later. unhead
    // writes the same value afterward, so the double write is idempotent.
    document.documentElement.dataset.theme = value;
    active.value = value as typeof active.value;
    await nextTick();
  });
}
</script>

<template>
  <USelect
    :model-value="active"
    :items="themes"
    value-key="value"
    icon="ri:palette-line"
    size="sm"
    class="w-44"
    aria-label="Site theme"
    @update:model-value="commitTheme"
  />
</template>
