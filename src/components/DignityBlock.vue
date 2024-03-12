<template>
  <div class="dignity">
    <div class="dignity__wrapper">
      <div class="dignity__wrapper--top">
        <div class="dignity__comfortable">
          <div class="subTitle"><p class="subTitle__text">удобно</p></div>
          <h1 class="title">
            Профессиональный психолог
            <span class="--bold">в вашем кармане</span>
          </h1>
          <p class="description">
            Ведет диалог как настоящий человек, понимая все, что вы говорите.
          </p>
          <img
            class="picture"
            src="../assets/img/dignity/comfortable.png" />
        </div>
      </div>
      <div class="dignity__wrapper--middle">
        <div class="dignity__available">
          <div class="subTitle"><p class="subTitle__text">доступно</p></div>
          <h1 class="title">Всегда рядом, всегда на связи</h1>
          <p class="description">
            Мгновенный отклик в любое время суток. Без выходных.
          </p>
          <img
            class="picture"
            src="../assets/img/dignity/available.png" />
        </div>
        <div class="dignity__effectively">
          <div class="subTitle"><p class="subTitle__text">доступно</p></div>
          <h1 class="title">Всегда рядом, всегда на связи</h1>
          <p class="description">
            Мгновенный отклик в любое время суток. Без выходных.
          </p>
          <img
            class="picture"
            src="../assets/img/dignity/effectively.png" />
        </div>
        <div class="dignity__profitable">
          <div class="subTitle"><p class="subTitle__text">доступно</p></div>
          <h1 class="title">Всегда рядом, всегда на связи</h1>
          <p class="description">
            Мгновенный отклик в любое время суток. Без выходных.
          </p>
          <img
            class="picture"
            src="../assets/img/dignity/profitable.png" />
        </div>
      </div>
    </div>
    <div class="dignity__wrapper--bottom">
      <div class="dignity__safely">
        <img
          class="picture"
          src="../assets/img/dignity/safely.png" />
        <div class="subTitle"><p class="subTitle__text">доступно</p></div>
        <h1 class="title">Всегда рядом, всегда на связи</h1>
        <p class="description">
          Мгновенный отклик в любое время суток. Без выходных.
        </p>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss">
  .dignity__wrapper {
    font-family: Onest;
    display: flex;
    flex-direction: column;
    padding: 97px 80px;
  }
  .dignity__wrapper--top {
    width: 100%;
  }
  .dignity__comfortable {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #fff;
    border-radius: 20px;
    padding: 70px 50px 0px 50px;
    .picture {
      position: absolute;
      width: 410px;
      right: 97px;
      top: -20px;
    }
  }
  .subTitle {
    padding: 16px 20px;
    background: #4eb97f;
    width: fit-content;
    color: #f1f1f1;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: 1px;
    border-radius: 90px;
    text-transform: uppercase;
  }
  .subTitle__text {
    margin: 0;
  }
  .title {
    font-size: 36px;
    font-weight: 500;
    width: 522px;
    margin: 0;
    margin-top: 27px;
    margin-bottom: 36px;
  }
  .description {
    font-size: 20px;
    width: 372px;
    margin: 0;
    margin-bottom: 71px;
  }
</style>
