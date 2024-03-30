<script setup>
import {ref} from "vue";


const props = defineProps({
  openSidebar: {
    type: Boolean,
    required: true,
  },
});

const links = ref([
  { name: 'Typography', link: '/typography' },
  { name: 'Button', link: '/button' },
]);
</script>

<template>
  <div :class="['sidebar', { 'sidebar_isOpen': openSidebar }]">
    <router-link
      class="sidebar__link"
      v-for="link in links"
      :key="link.name"
      :to="link.link"
    >
      {{ link.name }}
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  /* Позиционирование */
  position: fixed;
  left: 0;
  top: 62px;

  /* Блочная модель */
  height: 100%;
  width: 250px;
  padding: 20px;

  /* Оформление */
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);

  /* Анимация */
  transition: 0.2s;
  transform: translateX(-250px);
  &_isOpen {
    transform: translateX(0px);
  }
  &__link {
    /* Блочная модель */
    display: block;
    margin-bottom: 10px;

    /* Типографика */
    font-weight: bold;

    /* Оформление */
    border-radius: 12px;
    border: 2px solid #fff;

    /* Анимация */
    transition: 0.2s;
    &:hover {
      color: var(--primary);
    }
  }
}
</style>