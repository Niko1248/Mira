<template>
  <div class="top">
    <div class="circle-wait">
      <div class="star__wrap">
        <div class="star">
          <img
            class="star-mini"
            src="../assets/star.svg"
            alt="" />
          <img
            class="star-small"
            src="../assets/star.svg"
            alt="" />
          <div class="star-big__contaier">
            <img
              class="star-big"
              src="../assets/star.svg"
              alt="" />
            <div class="vortex"></div>
            <div class="vortex"></div>
            <div class="vortex"></div>
            <div class="vortex"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="polosa_2"></div>
      </div>
      <div class="l">
        <img
          src="../assets/mask__2.svg"
          alt=""
          srcset="" />
      </div>
      <div class="r"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '',
        text: 'Это проверочное сообщение от чат-бота психолога и необходимо сообщение подлиннее',
        index: 0
      }
    },
    methods: {
      showMessage() {
        let typeMessage = setInterval(() => {
          if (this.index < this.text.length) {
            this.message += this.text[this.index]
            this.index++
          } else {
            clearInterval(typeMessage)
          }
        }, 80)
      },
      getWidth() {
        const widthEl = this.$refs.windowWait.clientWidth
        return widthEl
      }
    }
  }
</script>

<style lang="scss">
  .message {
    background-color: #488ce1;
    border-radius: 10px;
    max-width: 15vw;
    padding: 10px;
    font-family: Onest;
    color: #fff;
  }

  .top {
    position: relative;
  }

  .wrapper {
    display: flex;
    height: 15vh;
    position: relative;
    width: fit-content;
    opacity: 0.3;
    filter: drop-shadow(4px 4px 5px #00000028);
    border-radius: 4vw;

    .container {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      height: 10vw;
      width: 100%;
      border-radius: 2vw;
      z-index: 2;
      clip-path: polygon(
        0% 37%,
        2% 36.5%,
        3% 35.5%,
        4% 33.3%,
        5% 30%,
        6% 26%,
        7% 20%,
        7.5% 12%,
        7.5% 9%,
        7.5% 5%,
        7.3% 0%,
        10% 0,
        100% 0,
        100% 100%,
        0 100%,
        0 41%
      );
    }

    .l {
      img {
        width: fit-content;
        height: 10vw;
        object-fit: contain;
      }
    }

    .r {
      background-color: #488ce1;
      width: 40vw;
      height: 10vw;
      border-radius: 0px 2vw 2vw 0px;
      position: relative;
    }
  }

  .message-wait {
    position: relative;
  }

  .window-wait {
    width: 15vw;
    height: 5vh;
    margin-bottom: 5vw;
    border-radius: 10px;
    background: #488ce1;
    mask-image: url(#maskForWindow);
    mask-repeat: no-repeat;
    mask-position: left top;
    overflow: hidden;
  }

  .polosa_2 {
    width: 50%;
    height: 100%;
    background: transparent;
    animation: movePolosa_2 4s ease infinite;
    animation-delay: 2s;
    z-index: 2;
  }

  @keyframes movePolosa_2 {
    from {
      transform: translateX(-180%);
      background: linear-gradient(
        117deg,
        rgba(72, 140, 225, 1) 15%,
        rgba(214, 214, 214, 0.45) 50%,
        rgba(72, 140, 225, 1) 80%
      );
    }

    to {
      transform: translateX(350%);
      background: linear-gradient(
        117deg,
        rgba(72, 140, 225, 1) 15%,
        rgba(214, 214, 214, 0.45) 50%,
        rgba(72, 140, 225, 1) 80%
      );
    }
  }

  .circle-wait {
    width: 5vw;
    height: 5vw;
    position: absolute;
    background-color: #488ce1;
    top: -1.8vw;
    left: -2.2vw;
    border-radius: 50%;
  }

  .star__wrap {
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .star {
    display: flex;
    animation-name: star;
    animation-duration: 3s;
    animation-delay: 3s;
    animation-iteration-count: infinite;
    align-items: center;
    justify-content: center;
    height: fit-content;
    position: relative;
  }

  .star-big__contaier {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    animation: starBig 4s ease-in-out infinite;
    animation-delay: 0.5s;

    img {
      width: 2.3vw;
    }

    .vortex:nth-child(2) {
      position: absolute;
      top: 0px;
      right: 50%;
      width: 0px;
      height: 0.5vw;
      background-image: url(../assets/star-line.png);
      background-size: cover;
      background-repeat: no-repeat;
      animation: starLine 4s ease-in-out infinite;
      animation-delay: 0.5s;
    }

    .vortex:nth-child(3) {
      position: absolute;
      top: calc(50%);
      left: -1px;
      width: 0.5vw;
      height: 0px;
      background-image: url(../assets/star-line-L.png);
      background-size: cover;
      background-repeat: no-repeat;
      animation: starLineVL 4s ease-in-out infinite;
      animation-delay: 0.5s;
    }

    .vortex:nth-child(4) {
      position: absolute;
      bottom: -1px;
      left: calc(50%);
      width: 0px;
      height: 0.5vw;
      background-image: url(../assets/star-line-B.png);
      background-size: cover;
      background-repeat: no-repeat;
      animation: starLineHB 4s ease-in-out infinite;
      animation-delay: 0.5s;
    }

    .vortex:nth-child(5) {
      position: absolute;
      bottom: calc(50%);
      right: -0.01vw;
      width: 0.5vw;
      height: 0px;
      background-image: url(../assets/star-line-R.png);
      background-size: cover;
      background-repeat: no-repeat;
      animation: starLineV 4s ease-in-out infinite;
      animation-delay: 0.5s;
    }
  }

  @keyframes starBig {
    0% {
      transform: rotate(0);
      filter: drop-shadow(0px 0px 0px #ffffffc5);
    }

    30% {
      transform: rotate(0);
      filter: drop-shadow(0px 0px 0px #ffffffc5);
    }

    50% {
      transform: rotate(-10deg);
      filter: drop-shadow(0px 0px 0px #ffffffc5);
    }

    60% {
      filter: drop-shadow(0px 0px 1px #ffffff72);
    }

    75% {
      filter: drop-shadow(0px 0px 5px #fff);
    }

    85% {
      transform: rotate(185deg);
      filter: drop-shadow(0px 0px 1px #ffffffc5);
    }

    100% {
      transform: rotate(180deg);
      filter: drop-shadow(0px 0px 0px #ffffffc5);
    }
  }

  @keyframes starLineV {
    0% {
      height: 0;
      transform: translateY(0px);
    }

    50% {
      height: 0;
      transform: translateY(0px);
    }

    60% {
      height: 0.9vw;
      transform: translateY(0px);
    }

    70% {
      height: 0.9vw;
      transform: translateY(-30%);
    }

    78% {
      height: 0px;
      transform: translateY(-30%);
    }

    100% {
      height: 0;
      transform: translateY(-30%);
    }
  }

  @keyframes starLineVL {
    0% {
      height: 0;
      transform: translateY(0px);
    }

    50% {
      height: 0px;
      transform: translateY(0px);
    }

    60% {
      height: 0.9vw;
      transform: translateY(0px);
    }

    70% {
      height: 0.9vw;
      transform: translateY(30%);
    }

    78% {
      height: 0px;
      transform: translateY(30%);
    }

    100% {
      height: 0;
      transform: translateY(30%);
    }
  }

  @keyframes starLine {
    0% {
      width: 0;
      height: 0.4vw;
    }

    50% {
      width: 0;
      height: 0.4vw;

      transform: translateX(0px);
    }

    60% {
      width: 0.9vw;
      height: 0.4vw;
      transform: translateX(0px);
    }

    70% {
      width: 0.9vw;
      height: 0.4vw;
      transform: translateX(-30%);
    }

    78% {
      width: 0;
      height: 0.4vw;
      transform: translateX(-30%);
    }

    100% {
      height: 0.4vw;
      width: 0;
      transform: translateX(-30%);
    }
  }

  @keyframes starLineHB {
    0% {
      width: 0;
      height: 0.4vw;
    }

    50% {
      width: 0px;
      height: 0.4vw;

      transform: translateX(0px);
    }

    60% {
      width: 0.9vw;
      height: 0.4vw;
      transform: translateX(0px);
    }

    70% {
      width: 0.9vw;
      height: 0.4vw;
      transform: translateX(30%);
    }

    78% {
      width: 0px;
      height: 0.4vw;
      transform: translateX(30%);
    }

    100% {
      height: 0.4vw;
      width: 0;
      transform: translateX(30%);
    }
  }

  .star-mini {
    position: absolute;
    bottom: calc(50% - 0.6vw);
    left: calc(50% - 0.6vw);
    width: 1.1vw;
    height: 1.1vw;
    transform: rotate(0) translateX(0px) translateY(0%);
    filter: drop-shadow(0px 0px 1vw #ffffff);
    animation: starMini 4s ease-in-out infinite;
    animation-delay: 0.5s;
    transition: all 500ms cubic-bezier(1, 0.05, 0.94, 0.76);
    transition-timing-function: cubic-bezier(1, 0.05, 0.94, 0.76);
  }

  @keyframes starMini {
    0% {
      transform: translateX(0%) translateY(0%) rotate(0deg);
    }

    60% {
      transform: translateX(0%) translateY(0%) rotate(0deg);
    }

    90% {
      transform: translateX(230%) translateY(-190%) rotate(120deg);
    }

    100% {
      transform: translateX(230%) translateY(-190%) rotate(120deg);
    }
  }

  .star-small {
    position: absolute;
    bottom: calc(50% - 0.3vw);
    left: calc(50% - 0.3vw);
    width: 0.6vw;
    height: 0.6vw;
    transform: rotate(0) translateX(0px) translateY(0%);
    filter: drop-shadow(0px 0px 1vw #ffffff);
    animation: starSmall 4s ease-in-out infinite;
    animation-delay: 0.5s;
    transition: all 500ms cubic-bezier(1, 0.545, 1, 0.85);
    /* custom */

    transition-timing-function: cubic-bezier(1, 0.545, 1, 0.85);
    /* custom */
  }

  @keyframes starSmall {
    0% {
      transform: translateX(0%) translateY(0%) rotate(0deg);
    }

    60% {
      transform: translateX(0%) translateY(0%) rotate(0deg);
    }

    100% {
      transform: translateX(500%) translateY(-130%) rotate(120deg);
    }
  }
</style>
