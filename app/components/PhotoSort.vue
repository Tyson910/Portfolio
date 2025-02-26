<script setup lang="ts">
import type { DropdownItem } from "#ui/types";

const { handleClick } = defineProps<{
  handleClick: (
    field: "title" | "date",
    method: "asc" | "desc"
  ) => Promise<void>;
}>();

const items = [
  [
    {
      label: "Newest",
      icon: "i-ri-sort-desc",
      onSelect: async () => {
        await handleClick("date", "desc");
      },
    },
    {
      label: "Oldest",
      icon: "i-ri-sort-asc",
      onSelect: async () => {
        await handleClick("date", "asc");
      },
    },
  ],
  [
    {
      label: "Name (Asc)",
      icon: "i-ri-sort-alphabet-asc",
      onSelect: async () => {
        await handleClick("title", "asc");
      },
    },
    {
      label: "Name (Desc)",
      icon: "i-ri-sort-alphabet-desc",
      onSelect: async () => {
        await handleClick("title", "desc");
      },
    },
  ],
] as const satisfies DropdownItem[][];
</script>

<template>
  <div class="space-x-5">
    <UDropdownMenu :items="items">
      <UButton
        color="neutral"
        variant="outline"
        label="Sort By"
        trailing-icon="i-ri-arrow-down-s-line"
      />
    </UDropdownMenu>
  </div>
</template>
