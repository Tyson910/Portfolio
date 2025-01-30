<script setup lang="ts">
const props = defineProps<{
  icon: string;
}>();
</script>

<template>
  <div class="flex items-center text-sm text-gray-600 dark:text-gray-100">
    <Icon :name="props.icon" class="mr-2 size-4 text-gray-500" />
    <slot />
  </div>
</template>
