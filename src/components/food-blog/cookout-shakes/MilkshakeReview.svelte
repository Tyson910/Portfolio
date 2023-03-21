<script lang="ts">
  import type { MilkshakeReview as MilkshakeReviewProps } from '@assets/cookout-milkshakes';
  import { ratingObj } from '@assets/cookout-milkshakes';
  export let dishName: MilkshakeReviewProps['dishName'] = '';
  export let stars: MilkshakeReviewProps['stars'];
  export let explanation: MilkshakeReviewProps['explanation'] = '';
  let showTooltip = false;
</script>

<div class="rounded-sm bg-white p-5 shadow-sm">
  <!-- JUST IN CASE I WANT TO ADD PICS
     <div class="mb- rounded-sm border border-gray-200 shadow-sm">
    <img
      src="https://images.prismic.io/surety/d2f946ac-8a7b-4a3e-adc8-22781bc4611b_auctioneer-1800.jpg?auto=compress,format"
      src={imgURL}
      loading="lazy"
      alt="bread"
      class="h-full w-full rounded-sm"
    /> 
  </div> 
  -->
  <div class="">
    <p class="text-xl font-semibold text-gray-900">{dishName}</p>
    <p class="text-sm text-gray-500 mt-1 ">
      {stars} stars
    </p>
    <button
      type="button"
      class="sm:w-max text-sm text-gray-500 italic cursor-pointer underline"
      on:mouseenter={() => (showTooltip = true)}
      on:mouseleave={() => (showTooltip = false)}
      on:click={() => (showTooltip = !showTooltip)}
    >
      What does this mean?
    </button>

    {#if showTooltip}
      <div
        class="text-sm p-2.5 border-black border w-64 bg-gray-900 text-white opacity-90 absolute"
      >
        {ratingObj[stars]}
      </div>
    {/if}
    <p class="mt-3 text-base text-gray-600">{explanation}</p>
  </div>
</div>
