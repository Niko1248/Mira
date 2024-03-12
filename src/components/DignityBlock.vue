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
        <div class="dignity__available dignity--item">
          <div class="subTitle"><p class="subTitle__text">доступно</p></div>
          <h1 class="title">
            Всегда рядом, всегда <span class="--bold">на связи</span>
          </h1>
          <p class="description">
            Мгновенный отклик в любое время суток. Без выходных.
          </p>
          <img
            class="picture"
            src="../assets/img/dignity/available.png" />
        </div>
        <div class="dignity__effectively dignity--item">
          <div class="subTitle"><p class="subTitle__text">ЭФФЕКТИВНО</p></div>
          <h1 class="title">
            Золотой <span class="--bold">стандарт</span> терапии
          </h1>
          <p class="description">
            Лучшие методы терапии, вручную отобранные опытными психологами.
          </p>
          <img
            class="picture"
            src="../assets/img/dignity/effectively.png" />
        </div>
        <div class="dignity__profitable dignity--item">
          <div class="subTitle"><p class="subTitle__text">выгодно</p></div>
          <h1 class="title">
            Помощь <br /><span class="--bold">доступна каждому</span>
          </h1>
          <p class="description">
            В 10 раз дешевле, чем услуги любого психолога*
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
        <div class="dignity__safely--wrapper">
          <div class="subTitle"><p class="subTitle__text">безопасно</p></div>
          <h1 class="title">
            Абсолютная <span class="--bold">анонимность</span>
          </h1>
          <p class="description">
            Только вы имеете доступ к вашим сессиям. Ваша конфиденциальность —
            наш приоритет.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss">
  @import '../assets/variables';
  .dignity {
    font-family: Onest;
  }
  .dignity__wrapper {
    display: flex;
    flex-direction: column;
    padding: 97px 70px 110px;
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
  .dignity__wrapper--middle {
    display: flex;
    .title {
      max-width: 320px;
      margin-top: 22px;
      font-size: 30px;
    }
    .description {
      font-size: 18px;
    }
    .dignity--item {
      width: calc((100% - 40px) / 3);
      padding: 50px;
      padding-bottom: 0;
      margin-left: 20px;
      border-radius: 20px;
      margin-top: 20px;
      box-sizing: border-box;
    }
    .dignity--item:nth-child(1) {
      background-color: $main-green;
      margin-left: 0;
      .description {
        max-width: 313px;
        margin-bottom: 30px;
      }
    }
    .dignity--item:nth-child(2) {
      background-color: $main-violet;
      color: #f1f1f1;
      .description {
        margin-bottom: 22px;
      }
    }
    .dignity--item:last-child {
      background-color: $main-blue;
      color: #f1f1f1;
      .subTitle {
        background-color: #f1f1f1;
        color: #1e1e1e;
      }
      .description {
        max-width: 316px;
        margin-bottom: 7px;
      }
      .title {
        max-width: 320px;
      }
    }
  }
  .dignity__safely {
    display: flex;
    justify-content: center;
  }
  .dignity__safely--wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      margin: 35.5px 0px 36px;
      max-width: 414px;
      font-size: 40px;
    }
    .description {
      margin-bottom: 0;
      font-size: 24px;
      width: 446px;
    }
  }
</style>
