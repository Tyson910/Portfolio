<script lang="ts">
  // import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
  import ChevronRightIcon from '~icons/lucide/chevron-right';
  import ChevronLeftIcon from '~icons/lucide/chevron-left';
  import EllipsisIcon from '~icons/lucide/ellipsis';

  type Props = {
    currentPage?: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };

  let { currentPage = 0, totalPages, onPageChange }: Props = $props();

  // const showEllipsis = $derived(totalPages > 7);

  const pageNumbers = $derived.by(() => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    }

    if (currentPage >= totalPages - 3) {
      return [
        1,
        '...',
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  });
</script>

<nav class="flex items-center justify-center space-x-2 mt-8 mb-4">
  <button
    onclick={() => onPageChange(currentPage - 1)}
    disabled={currentPage === 1}
    class="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
    aria-label="Previous page"
  >
    <ChevronLeftIcon class="size-5" />
  </button>

  <div class="flex items-center space-x-1">
    {#each pageNumbers as pageNumber, index}
      {#if pageNumber == '...' || typeof pageNumber == 'string'}
        <EllipsisIcon class="size-5 text-gray-400" />
      {:else}
        <button
          onclick={() => onPageChange(pageNumber)}
          class={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
        ${
          currentPage === pageNumber
            ? 'bg-gray-900 text-white'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
        >
          {pageNumber}
        </button>
      {/if}
    {/each}
  </div>

  <button
    onclick={() => onPageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    class="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
    aria-label="Next page"
  >
    <ChevronRightIcon class="size-5" />
  </button>
</nav>
