<template>
  <div class="default-layout">
    <MainHeader />
    <slot class="default-layout__content" />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>