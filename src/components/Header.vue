<template>
  <div class="site-header">
    <div class="site-header-container">
      <router-link to="/" class="site-header-logo">
        <img src="../assets/images/logo.svg" />
      </router-link>
      <div class="site-header-menu">
        <router-link
          v-for="(menu, i) in store.state.menus"
          :key="i"
          :to="menu.link"
        >
          {{ menu.label }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '../store'

export default defineComponent({
  name: 'Header',
  setup: () => {
    const store = useStore()

    return { store }
  }
})
</script>

<style lang="scss">

@import '../assets/scss/styles.scss';

.site-header {
  height: $header-height;
  width: 100%;
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: $header-shadow;
  border-top: 8px solid $primary-color;
  border-bottom: 8px solid white;

  &-container {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    max-width: $container-width;
    margin: 0 $container-padding;
  }

  &-logo {
    line-height: 0;
    img {
      width: 30px !important;
    }
  }
}
</style>
