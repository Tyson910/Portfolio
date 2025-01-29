<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});

const { copy, copied, isSupported } = useClipboard({
  source: props.code,
  copiedDuring: 3_000,
});
</script>

<template>
  <div class="flex flex-col">
    <!-- by default, `copied` will be reset in 1.5s -->
    <UButton
      v-if="isSupported"
      @click="copy()"
      :label="copied ? 'Copied!' : 'Copy'"
      class="w-max ml-auto rounded-b-none"
      :icon="
        copied
          ? 'i-heroicons-clipboard-document-check-16-solid'
          : 'i-heroicons-clipboard-16-solid'
      "
    />

    <pre
      :class="$props.class"
      class="bg-gray-800 rounded-md rounded-tr-none p-5 text-wrap"
    ><slot /></pre>
  </div>
</template>

<style>
pre code .line {
  display: block;
}
</style>
