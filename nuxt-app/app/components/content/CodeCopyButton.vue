<script setup lang="ts">
defineOptions({ inheritAttrs: false });

const attrs = useAttrs();
const status = ref<"idle" | "copied" | "failed">("idle");
let resetTimer: ReturnType<typeof setTimeout> | undefined;

const isCopyButton = computed(() => typeof attrs["data-code"] === "string");

const code = computed(() => {
  const value = attrs["data-code"];
  return typeof value === "string" ? value.replaceAll("\u007f", "\n") : "";
});

const feedback = computed(() => {
  if (status.value === "failed") return "Copy failed";

  const value = attrs["data-copied"];
  return typeof value === "string" ? value : "Copied!";
});

async function copyCode() {
  try {
    await navigator.clipboard.writeText(code.value);
    status.value = "copied";
  } catch {
    status.value = "failed";
  }

  clearTimeout(resetTimer);
  resetTimer = setTimeout(() => {
    status.value = "idle";
  }, 2000);
}

onScopeDispose(() => clearTimeout(resetTimer));
</script>

<template>
  <template v-if="isCopyButton">
    <div v-if="status !== 'idle'" class="feedback show" role="status">{{ feedback }}</div>
    <button v-bind="$attrs" type="button" @click="copyCode">
      <slot />
    </button>
  </template>
  <button v-else v-bind="$attrs" type="button">
    <slot />
  </button>
</template>
