<template>
  <div class="container main-page">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <div class="main-page__body">
      <NuxtLink to="/order" class="main-page__button button">В корзину</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const breadcrumbs = [
  "Главная"
]
</script>

<style lang="scss" scoped>
.main-page {
  flex-grow: 1;

  width: 100%;

  display: flex;
  flex-direction: column;

  &__body {
    flex-grow: 1;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>