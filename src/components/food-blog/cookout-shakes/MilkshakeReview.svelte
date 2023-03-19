<script lang="ts">
  import type { MilkshakeReview as MilkshakeReviewProps } from '@assets/cookout-milkshakes';
  import { ratingObj } from '@assets/cookout-milkshakes';
  export let dishName: MilkshakeReviewProps['dishName'] = "";
  export let stars: MilkshakeReviewProps['stars'];
  export let explanation: MilkshakeReviewProps['explanation'] = "";
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
    <p class="text-sm text-gray-500 mt-1">
      {stars} stars
      <!-- {ratingObj[stars]}  -->
    </p>
    <p class="mt-3 text-base text-gray-600">{explanation}</p>
  </div>
</div>