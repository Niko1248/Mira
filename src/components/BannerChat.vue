<!-- eslint-disable no-unused-vars -->
<template>
  <div class="chat">
    <div
      class="chat__wrapper"
      ref="chatWrapper">
      <transition
        name="fade-human"
        appear
        @after-enter="showGPTAfterDelay(currentChat)"
        @after-leave="startChat(currentChat)">
        <div
          class="chat__human"
          v-if="showHuman">
          <div class="chat__human-ico ico">
            <img
              :src="chatArray[this.currentChat].humanIco"
              alt="" />
          </div>
          <div class="chat__human-text text">
            {{ chatArray[this.currentChat].humanText }}
          </div>
        </div>
      </transition>

      <transition name="fade-gpt">
        <div
          v-if="showGPT"
          class="chat__gpt">
          <div class="chat__gpt-ico ico">
            <img
              src="../assets/img/chat_avatars/ava_gpt.svg"
              alt="" />
          </div>
          <div class="chat__gpt-text text">{{ typedText }}</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showHuman: false,
        showGPT: false,
        chatArray: [
          {
            humanText: 'Я не умею заводить друзей',
            gptText:
              'Поделитесь, пожалуйста, что именно вас беспокоит в процессе знакомства? Какие эмоции вы при этом испытываете?',
            humanIco: 'src/assets/img/chat_avatars/women_1.png'
          },
          {
            humanText: 'Впереди рабочий день - много всего надо сделать',
            gptText:
              'Понимаю, это может вызывать тревогу. А какие мысли приходят вам в голову, когда вы думаете о предстоящем рабочем дне?',
            humanIco: 'src/assets/img/chat_avatars/man_1.png'
          },
          {
            humanText: 'Уже давно у меня нет отношений',
            gptText:
              'Не могли бы вы поделиться, как вы думаете, всегда ли прошлый опыт определяет наше будущее?',
            humanIco: 'src/assets/img/chat_avatars/women_2.png'
          },
          {
            humanText: 'Я никому не нужен',
            gptText:
              'Это может быть очень тяжелым ощущением. Если вы не возражаете, расскажите, какие обстоятельства привели вас к такой мысли?',
            humanIco: 'src/assets/img/chat_avatars/man_2.png'
          },
          {
            humanText: 'Наверное, я что-то делаю не так',
            gptText:
              ' Как вы считаете, что именно могло пойти не так? Есть ли конкретные моменты, которые вызывают у вас такие мысли?',
            humanIco: 'src/assets/img/chat_avatars/women_3.png'
          }
        ],
        currentChat: 0,
        typedText: '',
        currentIndex: 0,
        words: [],
        typedComplete: false
      }
    },
    watch: {
      typedComplete() {
        if (this.typedComplete) {
          setTimeout(this.resetChat, 2000)
        }
      }
    },

    mounted() {
      this.startChat(this.currentChat)
    },
    methods: {
      startChat(current) {
        this.showHuman = true
        if (current == 5) {
          this.currentChat = 0
        }
      },
      showGPTAfterDelay(current) {
        setTimeout(() => {
          this.words = this.chatArray[current].gptText.split(' ')
          this.showGPT = true
          setTimeout(this.typeWord, 1500)
        }, 100)
      },
      resetChat() {
        this.showHuman = false
        this.showGPT = false
        this.currentChat++
        this.currentIndex = 0
        this.typedText = ''
        this.typedComplete = false
      },
      typeWord() {
        if (this.currentIndex < this.words.length) {
          this.typedText +=
            (this.typedText ? ' ' : '') + this.words[this.currentIndex]
          this.currentIndex++
          setTimeout(this.typeWord, 200)
        } else {
          this.typedComplete = true
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/variables';

  .chat__wrapper {
    display: flex;
    flex-direction: column;

    @media (max-width: $mobile-width) {
      align-items: center;
    }
  }

  .chat__human,
  .chat__gpt {
    display: flex;
    margin-bottom: 50px;
  }

  .ico {
    margin-right: 1vw;

    @media (max-width: $mobile-width) {
      margin-right: 3.05vw;
    }

    img {
      @media (max-width: $mobile-width) {
        width: 7.12vw;
      }
    }
  }

  .text {
    border-radius: 20px;
    width: 100%;
    padding: 30px;

    @media (max-width: $mobile-width) {
      font-size: 3.56vw;
      padding: 4.58vw 9.16vw 10.43vw 4.58vw;
    }
  }

  .chat__gpt-text {
    background-color: rgba(255, 255, 255, 0.8);
    position: relative;

    &::after {
      content: '';
      opacity: 0.8;
      position: absolute;
      top: -27px;
      right: 46px;
      display: block;
      width: 44px;
      height: 27px;
      background-image: url(../assets/img/chat_avatars/chat_gpt--tail.svg);
    }

    @media (max-width: $mobile-width) {
      width: 55.73vw;
    }
  }

  .chat__human-text {
    background-color: $chat-human;
    color: white;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: -21px;
      left: 50px;
      display: block;
      width: 46px;
      height: 22px;
      background-image: url(../assets/img/chat_avatars/chat_human--tail.svg);
    }

    @media (max-width: $mobile-width) {
      width: 55.73vw;
    }
  }

  .fade-human-enter-active,
  .fade-gpt-enter-active,
  .fade-human-leave-active,
  .fade-gpt-leave-active {
    transition: all 1.2s ease;
  }

  .fade-human-enter-from {
    opacity: 0;
    transform: translateY(-100px);
  }

  .fade-gpt-enter-from {
    opacity: 0;
  }

  .fade-human-leave-to,
  .fade-gpt-leave-to {
    opacity: 0;
  }
</style>
