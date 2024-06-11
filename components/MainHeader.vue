<template>
  <header class="header">
    <div class="header__inner">
      <h2>Ваша корзина</h2>
      <p>{{ totalItemTypes }} товаров</p>
      <p>{{ totalPrice }} ₽</p>
    </div>
  </header>
</template>

<script setup>

const store = useCart();
const { totalItemTypes, totalPrice } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.header {

  &__inner {
    padding: 20px;

    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
  }

}
</style>