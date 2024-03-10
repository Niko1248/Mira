<template>
  <div class="NavMenu">
    <div class="wrapper">
      <div class="NavMenu__logo">
        <MainLogo class="logo" />
      </div>
      <NavMenu__List class="PC" />
      <div class="NavMenu__enter">
        <Enter />
        <p class="NavMenu__item">Войти</p>
      </div>
    </div>
    <!--     <NavMenu__List class="Mobile" />
 -->
  </div>
</template>

<script setup>
  import MainLogo from '../assets/icons/MainLogo-ico.vue'
  import Enter from '../assets/icons/Enter-ico.vue'
  import NavMenu__List from './NavMenu__List.vue'
</script>

<style lang="scss">
  @import '../assets/variables';

  .PC {
    @media (max-width: $mobile-width) {
      display: none;
    }
  }

  .wrapper {
    margin: 13px 29px 150px 34px;
    font-family: Onest;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: $mobile-width) {
      margin: 0 auto;
      background-color: rgba(255, 255, 255, 0.55);
      border-radius: 16px;
      padding: 2.54vw 2.29vw 3.05vw 2.04vw;
      margin: 1vw 1.27vw 17.56vw 1.27vw;
    }
  }

  .NavMenu__logo {
    display: flex;
    align-items: center;
  }

  .logo {
    @media (max-width: $mobile-width) {
      width: 24.94vw;
      height: 7.88vw;
    }
  }

  .NavMenu__enter {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $btn-color;
    border-radius: 90px;
    color: #fff;
    padding: 22px 20px;
    cursor: pointer;

    .NavMenu__item {
      margin: 0 6px;
    }

    @media (max-width: $mobile-width) {
      padding: 3.31vw 5.09vw;
    }
  }
</style>
import { h } from "vue"; import { h } from "vue";
