<script lang="ts">
  import type { Snippet } from 'svelte';
  import type CalendarIcon from '~icons/ri/calendar-line';

  let {
    Icon,
    children,
  }: {
    Icon: typeof CalendarIcon;
    children: Snippet;
  } = $props();
</script>

<div class="flex items-center text-sm text-gray-600">
  <Icon class="mr-2 size-4 text-gray-500" />
  <span>
    {@render children()}
  </span>
</div>
