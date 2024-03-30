<script setup>

</script>

<template>
  <header class="header">
    <router-link to="/">UI KIT (Vue 3)</router-link>
  </header>
</template>

<style scoped lang="scss">
.header {
  /* Позиционирование */
  position: relative;
  z-index: 1;

  /* Блочная модель */
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 0 1.25rem;

  /* Типографика */
  font-weight: bold;

  /* Оформление */
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
}
</style>