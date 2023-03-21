<script lang="ts">
  import MilkshakeReview from '@components/food-blog/cookout-shakes/MilkshakeReview.svelte';
  import { milkshakeReviews } from '@assets/cookout-milkshakes';
  import type { MilkshakeReview as MilkshakeReviewInterface } from '@assets/cookout-milkshakes';
  /** Remember: Ascending is lowest to highest, Descending is highest to lowest */
  type SortMethodOptions =
    | 'name-asc'
    | 'name-desc'
    | 'rating-desc'
    | 'rating-asc';
  let query = '';
  let sortMethod: SortMethodOptions = 'rating-desc';

  function sortReviews(arr: MilkshakeReviewInterface[]) {
    // highest to lowest
    if (sortMethod == 'rating-desc') {
      return arr.sort((a, b) => b.stars - a.stars);
    } else if (sortMethod == 'rating-asc') {
      return arr.sort((a, b) => a.stars - b.stars);
    } else if (sortMethod == 'name-desc') {
      return arr.sort((a, b) => {
        const nameA = a.dishName.toUpperCase(); // ignore upper and lowercase
        const nameB = b.dishName.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    } else if (sortMethod == 'name-asc') {
      return arr.sort((a, b) => {
        const nameA = a.dishName.toUpperCase(); // ignore upper and lowercase
        const nameB = b.dishName.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    }
  }
  // $: sortedReviews = milkshakeReviews.sort((a, b) => b.stars - a.stars);
  let sortedReviews = sortReviews([...milkshakeReviews]);

  $: results = sortedReviews.filter(({ dishName }) =>
    dishName.toLowerCase().includes(query.toLowerCase())
  );
</script>

<form class="" on:submit|preventDefault>
  <div class="flex flex-col-reverse sm:flex-col md:flex-row gap-y-6 sm:gap-y-5 items-center justify-between mb-6 text-gray-900">
    <label for="shake-search" class="font-medium text-lg md:text-base"
      >Search For a Flavor</label
    >
    <div>
      <label
        for="sort-by"
        class="font-medium"
        >Sort By:
      </label>
      <select
        id="sort-by"
        name="sort-by"
        class="rounded-md py-2 px-3 text-sm scroll-mt-24"
        bind:value={sortMethod}
        on:change={(e) =>
          (sortedReviews = sortReviews([...milkshakeReviews]))}
      >
        <option selected value="rating-desc">Rating (High to Low)</option>
        <option value="rating-asc">Rating (Low to High)</option>
        <option value="name-asc">Name (A - Z)</option>
        <option value="name-desc">Name (Z - A)</option>
      </select>
    </div>
  </div>
  <div class="relative mt-2 rounded-md shadow-sm">
    <div
      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        class="w-5 h-5 text-gray-400 fill-current"
      >
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <input
      bind:value={query}
      type="text"
      name="shake-search"
      id="shake-search"
      class="w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
      placeholder="Banana Berry"
    />
  </div>
</form>
<div class="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
  {#each results as { explanation, dishName, stars }, i}
    <MilkshakeReview {explanation} {dishName} {stars} />
  {/each}
</div>
