<script setup lang="ts">
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";
</script>

<template>
  <div>
    <NavBar />
    <div class="py-10">
      <slot />
    </div>
    <Footer />
  </div>
</template>
