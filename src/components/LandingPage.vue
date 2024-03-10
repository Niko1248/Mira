<template>
  <div class="LandingPage">
    <Banner />
  </div>
</template>

<script setup>
  import Banner from './Banner.vue'
</script>

<style lang="scss">
  @import '../assets/variables';

  .LandingPage {
    width: $main-width;
    display: flex;
    justify-content: center;
    padding: 10px;

    @media (max-width: $mobile-width) {
      width: 100%;
      padding: 2.54vw 1.78vw;
      box-sizing: border-box;
    }
  }
</style>
