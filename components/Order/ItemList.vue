<template>
  <div class="order-item-list">
    <header class="order-item-list__header">
      <p>Ваша корзина</p>
      <p>{{ totalItems }} товара</p>
      <button @click="store.clearCart()">Очистить корзину</button>
    </header>
    <div class="order-item-list__body">
      <OrderItem :item="{
        id: 1, name: 'Мишка бурый', price: 100, image: 'https://placebear.com/300/300',
        description: 'lorem  ipsum dolor sit amet consectetur adipisicing elit lorem  ipsum dolor sit amet consectetur adipisicing elit lorem  ipsum dolor sit amet consectetur adipisicing elit'
      }" />
      <OrderItem :item="{
        id: 2, name: 'Мишка серый', price: 200, image: 'https://placebear.com/400/400',
        description: 'lorem  ipsum dolor sit amet consectetur adipisicing elit lorem  ipsum dolor sit amet consectetur adipisicing elit lorem  ipsum dolor sit amet consectetur adipisicing elit'
      }" />
      <OrderItem :item="{
        id: 3, name: 'Мишка черный', price: 300, image: 'https://placebear.com/500/500',
        description: 'lorem  ipsum dolor sit amet consectetur adipisicing elit lorem  ipsum dolor sit amet consectetur adipisicing elit lorem  ipsum dolor sit amet consectetur adipisicing elit'
      }" />
      <OrderItem :item="{
        id: 4, name: 'Мишка красный', price: 400, image: 'https://placebear.com/600/600',
        description: 'lorem  ipsum dolor sit amet consectetur adipisicing elit lorem  ipsum dolor sit amet consectetur adipisicing elit lorem  ipsum dolor sit amet consectetur adipisicing elit'
      }" />
    </div>
    <OrderSetup />
  </div>
</template>

<script setup>
const store = useCart();
const { totalItems } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.order-item-list {
  flex-grow: 2;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 50px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 25px;

    margin-bottom: 44px;
  }
}
</style>