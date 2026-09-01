<script setup lang="ts">
defineProps<{ date: string }>();
</script>

<template>
  <NuxtTime
    :datetime="date"
    locale="en-US"
    year="numeric"
    month="short"
    day="numeric"
    time-zone="UTC"
  />
</template>
