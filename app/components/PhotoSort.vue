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
      click: async () => {
        await handleClick("date", "desc");
      },
    },
    {
      label: "Oldest",
      icon: "i-ri-sort-asc",
      click: async () => {
        await handleClick("date", "asc");
      },
    },
  ],
  [
    {
      label: "Name (Asc)",
      icon: "i-ri-sort-alphabet-asc",
      click: async () => {
        await handleClick("title", "asc");
      },
    },
    {
      label: "Name (Desc)",
      icon: "i-ri-sort-alphabet-desc",
      click: async () => {
        await handleClick("title", "desc");
      },
    },
  ],
] as const satisfies DropdownItem[][];
</script>

<template>
  <div>
    <UDropdown :items="items">
      <UButton
        color="white"
        label="Sort By"
        trailing-icon="i-ri-arrow-down-s-line"
      />
    </UDropdown>
  </div>
</template>
