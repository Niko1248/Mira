/* eslint-disable no-inline-comments */
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
            humanText: 'Первый чат человек',
            gptText:
              'Первый чат GPT, это тестовое сообщение для проверки того, как работает анимация',
            humanIco: 'src/assets/img/chat_avatars/women_1.png'
          },
          {
            humanText: 'Второй чат человек',
            gptText:
              'Второй чат GPT, это тестовое сообщение для проверки того, как работает анимация',
            humanIco: 'src/assets/img/chat_avatars/man_1.png'
          },
          {
            humanText: 'Третий чат человек',
            gptText:
              'Третий чат GPT, это тестовое сообщение для проверки того, как работает анимация',
            humanIco: 'src/assets/img/chat_avatars/women_2.png'
          },
          {
            humanText: 'Четвертый чат человек',
            gptText:
              'Четвертый чат GPT, это тестовое сообщение для проверки того, как работает анимация',
            humanIco: 'src/assets/img/chat_avatars/man_2.png'
          },
          {
            humanText: 'Пятый чат человек',
            gptText:
              'Пятый чат GPT, это тестовое сообщение для проверки того, как работает анимация',
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
      typedComplete(newValue, value) {
        if (this.typedComplete) {
          setTimeout(this.resetChat, 1200)
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
        }, 700)
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
          setTimeout(this.typeWord, 300)
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
  }
  .chat__human,
  .chat__gpt {
    display: flex;
    margin-bottom: 1.5vw;
  }
  .ico {
    margin-right: 1vw;
  }
  .text {
    border-radius: 20px;
    width: 100%;
    padding: 30px;
  }
  .chat__gpt-text {
    background-color: white;
  }
  .chat__human-text {
    background-color: $chat-human;
    color: white;
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
/* eslint-disable no-inline-comments */
