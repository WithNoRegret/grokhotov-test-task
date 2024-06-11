<template>
  <div class="order-setup">
    <div class="order-setup__checkbox" @click="store.toggleSetup()" :class="{ 'order-setup__checkbox--active': setup }">
    </div>
    <img src="../../assets/icons/setup.svg" alt="setup" class="order-setup__image">
    <div class="order-setup__body">
      <h3 class="order-setup__title">Установка</h3>
      <p class="order-setup__description">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных
        товаров.</p>
    </div>
  </div>
</template>

<script setup>
const store = useCart();
const { setup } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.order-setup {
  height: 102px;
  display: flex;
  align-items: center;
  gap: 20px;

  &__checkbox {
    width: 20px;
    height: 20px;
    border: 1px solid black;

    &--active {
      background-color: var(--color-blue);
    }
  }
}
</style>