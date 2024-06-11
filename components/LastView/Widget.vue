<template>
  <div class="last-view">
    <header class="last-view__header">
      <h2 class="last-view__title">Просмотренные товары</h2>
    </header>
    <div class="last-view__body">
      <LastViewSlider />
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.last-view {
  height: 660px;
  margin-bottom: 116px;

  &__header {
    margin-bottom: 60px;
  }
}
</style>