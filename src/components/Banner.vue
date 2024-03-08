<template>
  <div class="banner">
    <NavMenu />
    <div class="banner__wrapper">
      <div class="banner__content">
        <div class="banner__prefix">
          <Brain />
          <p class="prefix__text">Инновационный продукт</p>
        </div>
        <h1 class="banner__tagline">
          Искусственный интеллект в роли психолога
        </h1>
        <a class="banner__button">Пробовать бесплатно</a>
      </div>
      <div class="banner__chat">
        <BannerChat />
      </div>
    </div>
  </div>
</template>

<script setup>
  import NavMenu from './NavMenu.vue'
  import BannerChat from './BannerChat.vue'
  import Brain from '../assets/icons/Brain-ico.vue'
</script>

<style lang="scss">
  @import '../assets/variables';

  .banner {
    background-image: url(../assets/Bg_banner.png);
    background-size: cover;
    width: 100%;
    border-radius: 20px;
    font-family: Onest;
  }

  .banner__wrapper {
    display: flex;
    justify-content: center;
    gap: 114px;
    max-height: fit-content;
  }

  .banner__content {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  .banner__prefix {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 0 29px;
    border: 1px solid rgba(50, 51, 69, 0.31);
    border-radius: 90px;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 120%;
    font-weight: 600;
    letter-spacing: 1px;
    color: #323445;
    margin-bottom: 51px;

    p {
      margin: 25px 0px 25px 10px;
    }
  }

  .banner__tagline {
    width: 738px;
    font-size: 56px;
    font-weight: 500;
    line-height: 110%;
    color: #1e1e1e;
    margin: 0;
    margin-bottom: 50px;
  }

  .banner__button {
    font-weight: 500;
    font-size: 18px;
    color: #fff;
    padding: 28px 46px;
    width: fit-content;
    background-color: $btn-color;
    border-radius: 90px;
    margin-bottom: 193px;
  }

  .banner__chat {
    width: 428px;
  }
</style>
