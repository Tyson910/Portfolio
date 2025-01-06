<script lang="ts">
  type Props = {
    currentPage: number;
    totalPages: number;
  };

  let { totalPages, currentPage }: Props = $props();
</script>

<nav class="flex items-center justify-center space-x-2 mt-8 mb-4">
  <!-- <a
    disabled={currentPage === 1}
    class="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
    aria-label="Previous page"
  >
    <ChevronLeftIcon class="size-5" />
  </a> -->

  <div class="flex items-center space-x-1">
    {#each { length: totalPages }, pageNumberIdx}
      {@const pageNumber = pageNumberIdx + 1}
      <a
        href={`/film/${pageNumber}`}
        class={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
      ${
        currentPage === pageNumber
          ? 'bg-gray-900 text-white'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
      >
        {pageNumber}
      </a>
    {/each}
  </div>

  <!-- <button
    disabled={currentPage === totalPages}
    class="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
    aria-label="Next page"
  >
    <ChevronRightIcon class="size-5" />
  </button> -->
</nav>
