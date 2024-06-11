<template>
  <div class="container order-page">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <div class="order-page__body">
      <OrderItemList />
      <OrderSummary />
    </div>
    <LastViewWidget />
  </div>
</template>

<script setup>
const breadcrumbs = [
  "Главная",
  "Корзина"
]
</script>

<style lang="scss" scoped>
.order-page {
  flex-grow: 1;

  width: 100%;

  display: flex;
  flex-direction: column;

  &__body {
    margin-block: 60px 95px;

    flex-grow: 1;

    display: flex;
    gap: 51px;
  }
}
</style>