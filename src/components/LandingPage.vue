<template>
    <div class="LandingPage">
        <Banner />
    </div>
</template>

<script setup>
import Banner from './Banner.vue';

</script>

<style lang="scss">
@import "../assets/variables";

.LandingPage {
    width: $main-width;
    display: flex;
    justify-content: center;
    padding: 10px;
}
</style>