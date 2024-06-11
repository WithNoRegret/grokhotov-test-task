vue
Copy code
<template>
  <div class="order-item">
    <img :src="item.image" :alt="item.name" class="order-item__image" />
    <div class="order-item__body">
      <p class="order-item__title">{{ item.name }}</p>
      <p class="order-item__description">{{ item.description }}</p>
    </div>
    <div class="order-item__controls">
      <button class="order-item__button" @click="store.removeItem(item.id)">—</button>
      <p class="order-item__amount">{{ store.getItemCountById(item.id) }}</p>
      <button class="order-item__button"
        @click="store.addItem({ id: item.id, price: item.price, name: item.name })">+</button>
    </div>
    <p class="order-item__price">{{ item.price }} ₽</p>
    <button class="order-item__delete" @click="store.resetItemById(item.id)">x</button>
  </div>
</template>

<script setup>

const { item } = defineProps(['item']);
const store = useCart();
</script>

<style lang="scss" scoped>
.order-item {
  min-height: 121px;
  border-bottom: 1px solid var(--color-light-gray);
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
  padding: 20px;
  position: relative;

  &__image {
    width: 100px;
    height: 100px;
  }

  &__button {
    cursor: pointer;
    padding: 18px;
  }

  &__body {
    max-width: 263px;
  }

  &__controls {
    display: flex;
    align-items: center;
  }

  &__delete {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
  }
}
</style>