<template>
    <div class="chat">
        <div class="chat__wrapper" ref="chatWrapper">
            <div v-for="chat in filteredChats" :key="chat.id" :class="'chat__' + chat.type">
                <div class="chat__avatar" v-if="chat.image">
                    <img :src="chat.image" :alt="chat.type + ' avatar'" />
                </div>
                <div class="chat__message" v-if="chat.text">
                    <p class="chat__message-text">{{ chat.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import manImage from "../assets/img/chat_avatars/man_1.png";
import gptImage from "../assets/img/chat_avatars/ava_gpt.svg";

export default {
    data() {
        return {
            chatSessions: [
                {
                    id: 1,
                    chats: [
                        {
                            id: 1,
                            type: "human",
                            image: manImage,
                            text: "Hello! How can I help you?",
                            visible: true,
                        },
                        {
                            id: 2,
                            type: "gpt",
                            image: gptImage,
                            text: "I am a chatbot. I can assist with various queries.",
                            visible: true,
                        },
                    ],
                },
                {
                    id: 2,
                    chats: [
                        {
                            id: 1,
                            type: "human",
                            image: manImage,
                            text: "Can you provide more information about your services?",
                            visible: true,
                        },
                        {
                            id: 2,
                            type: "gpt",
                            image: gptImage,
                            text: "Certainly! Our services include...",
                            visible: true,
                        },
                    ],
                },
                {
                    id: 3,
                    chats: [
                        {
                            id: 1,
                            type: "human",
                            image: manImage,
                            text: "Another session with human.",
                            visible: true,
                        },
                        {
                            id: 2,
                            type: "gpt",
                            image: gptImage,
                            text: "Another session with the chatbot.",
                            visible: true,
                        },
                    ],
                },
                // Add more chat sessions as needed
            ],
            currentSessionIndex: 0,
            currentChats: [],
        };
    },
    computed: {
        filteredChats() {
            return this.currentChats.filter((chat) => chat && chat.type && chat.text);
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.startSession();
        });
    },
    methods: {
        startSession() {
            const currentSession = this.chatSessions[this.currentSessionIndex];
            this.currentChats = currentSession.chats;
            this.addChat(0);
        },
        addChat(index) {
            if (index < this.currentChats.length) {
                const chat = this.currentChats[index];
                this.currentChats.push({
                    id: this.currentChats.length + 1,
                    type: chat.type,
                    image: chat.image,
                    text: `New text for ${chat.type}`,
                    visible: true,
                });

                setTimeout(() => {
                    this.addChat(index + 1);

                    if (index === this.currentChats.length - 1) {
                        this.nextSession();
                    }
                }, 3000);
            }
        },
        nextSession() {
            if (this.currentSessionIndex < this.chatSessions.length - 1) {
                this.currentSessionIndex++;
                this.currentChats = [];

                setTimeout(() => {
                    this.startSession();
                }, 3000);
            } else {
                // If all sessions are completed
                // You can handle this scenario here
            }
        },
    },
};
</script>

<style lang="scss">
.chat__wrapper {
    display: flex;
    flex-direction: column;
}

.chat__human .chat__message {
    background-color: #488ce1;
    width: 358px;
}

.chat__gpt .chat__message {
    background-color: #fff;
    width: 358px;
}
</style>
