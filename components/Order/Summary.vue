<template>
  <div class="order-summary">
    <div class="order-summary__details">
      <h2 class="order-summary__title">Итого</h2>
      <div class="order-summary__body">
        <p class="order-summary__body-line"><span>Сумма заказа</span><span>{{ totalPrice }} ₽</span></p>
        <p class="order-summary__body-line"><span>Количество</span><span>{{ totalItems }} шт</span></p>
        <p class="order-summary__body-line"><span>Установка</span><span>{{ setup ? 'Да' : 'Нет' }}</span></p>
      </div>
    </div>
    <p class="order-summary__total"><span>Стоимость товаров</span><span>{{ totalPrice }} ₽</span></p>
    <div class="order-summary__buttons">
      <button class="order-summary__button button" @click="HandleOrder">Оформить заказ</button>
      <button class="order-summary__butto button button--transparent" @click="HandleOrder">Купить в 1 клик</button>
    </div>
  </div>
</template>

<script setup>
const store = useCart();
const { totalItems, totalPrice, cartItems, setup } = storeToRefs(store);

const HandleOrder = () => {
  if (!cartItems.value.length) {
    alert('Корзина пуста');
  } else {
    useFetch('/api/order', { method: 'POST', body: { items: cartItems, setup } });
    store.clearCart();
    alert('Заказ оформлен');
  }
}
</script>

<style lang="scss" scoped>
.order-summary {
  flex-grow: 1;

  position: sticky;
  top: 0;

  margin-top: 31px;
  padding: 35px 30px;

  max-height: 458px;

  &__details {
    border-bottom: 1px solid var(--color-light-gray);
    padding-bottom: 28px;
    margin-bottom: 10px;
  }

  &__title {
    margin-bottom: 31px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 17px;

    &-line {
      display: flex;
      justify-content: space-between;
    }
  }

  &__total {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>