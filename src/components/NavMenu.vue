<template>
    <div class="NavMenu">
        <div class="wrapper">
            <div class="NavMenu__logo">
                <MainLogo />
            </div>
            <div class="NavMenu__list">
                <p class="NavMenu__item">С чем поможет</p>
                <p class="NavMenu__item">Тарифы</p>
                <p class="NavMenu__item">Вопросы и ответы</p>
            </div>
            <div class="NavMenu__enter">
                <Enter />
                <p class="NavMenu__item">Войти</p>
            </div>
        </div>

    </div>
</template>

<script setup>
import MainLogo from '../assets/icons/MainLogo-ico.vue';
import Enter from '../assets/icons/Enter-ico.vue';

</script>

<style lang="scss">
@import "../assets/variables";

.wrapper {
    margin: 13px 29px 150px 34px;
    font-family: Onest;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.NavMenu__list {
    padding: 29px 55px 30px 55px;
    display: flex;
    justify-content: center;
    gap: 2.08vw;
    background-color: #fff;
    border-radius: 900px;

    p {
        margin: 0;
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

    p {
        margin: 0 6px;

    }
}
</style>
