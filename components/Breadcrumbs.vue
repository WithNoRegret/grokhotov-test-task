<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li v-for="item in breadcrumbs" :key="item" class="breadcrumbs__item">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
const { breadcrumbs } = defineProps(['breadcrumbs']);
</script>

<style lang="scss" scoped>
.breadcrumbs {
  margin-top: 30px;

  &__list {
    display: flex;
    gap: 10px;
  }

  &__item {
    cursor: pointer;
    display: flex;
    align-items: center;
    column-gap: 3px;

    &:not(:first-child) {
      color: var(--color-gray);
    }

    &:not(:last-child) {
      &::after {
        content: "";
        height: 8px;
        width: 5px;
        background: url('@/assets/icons/breadcrumbs-arrow.svg') center center / contain no-repeat;
      }
    }
  }
}
</style>