<script lang="ts">
  import { onMount } from 'svelte';
  import ArrowLeftIcon from '~icons/lucide/arrow-left';

  let isFirstVisit = $state(false);

  onMount(() => {
    if (history.length == 1) {
      isFirstVisit = true;
    }
  });
</script>

{#if isFirstVisit}
  <a
    href="/blog/film/page/1"
    class="flex items-center text-gray-700 hover:text-black"
  >
    <ArrowLeftIcon class="mr-2" />
    Back to Gallery
  </a>
{:else}
  <button
    onclick={() => history.back()}
    class="flex items-center text-gray-700 hover:text-black"
  >
    <ArrowLeftIcon class="mr-2" />
    Back to Gallery
  </button>
{/if}
