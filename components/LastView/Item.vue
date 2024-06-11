<template>
  <div class="last-view-item">
    <img src="https://placebear.com/300/300" alt="placebear" class="last-view-item__image">
    <h3 class="last-view-item__title">{{ name }}</h3>
    <p class="last-view-item__description">lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit
      amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    <p class="last-view-item__price">6 848 ₽ – 56 584 ₽</p>
    <p class="last-view-item__price last-view-item__price--alternate">77.60 € – 643.86 €</p>
    <button class="last-view-item__button button">Подробнее</button>
  </div>
</template>

<script setup>
const { name } = defineProps(['name']);
</script>

<style lang="scss" scoped>
.last-view-item {
  padding: 25px;

  &__image {
    width: 245px;
    height: 245px;
  }

  &__title {
    margin-bottom: 10px;
  }

  &__description {
    margin-bottom: 60px;
  }

  &__price {
    &--alternate {
      margin-bottom: 20px;
    }
  }
}
</style>