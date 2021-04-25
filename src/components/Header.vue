<template>
  <div class="site-header">
    <div class="site-header-container">
      <Link to="/" class="site-header-logo">
        <img src="../assets/images/logo.svg" />
      </Link>
      <div class="site-header-menu">
        <Link
          v-for="(menu, i) in store.state.menus"
          :key="i"
          :to="menu.link"
          :target="menu.link.startsWith('http') ? '_blank' : null"
          :class="getMenuClasses(menu)"
        >
          {{ menu.label }}
        </Link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MenuLink, useStore } from '../store'
import { useRoute } from 'vue-router'
import { Link } from '@magenta-ui/vue'

export default defineComponent({
  name: 'Header',
  components: {
    Link,
  },
  setup: () => {
    const store = useStore()
    const route = useRoute()

    const getMenuClasses = (menu: MenuLink) => {
      return {
        'mag-link-active': route.path.startsWith(menu.link!)
      }
    }

    return { store, getMenuClasses }
  }
})
</script>

<style lang="scss" scoped>

@import '../assets/scss/variables.scss';

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
  border-top: 6px solid $primary-color;
  border-bottom: 6px solid white;

  &-container {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    max-width: $container-width;
    margin: 0 $container-padding;
  }

  &:deep(.site-header-logo) {
    line-height: 0;
    img {
      width: 30px !important;
    }
  }

  &-menu {
    :deep(.mag-link) {
      margin-left: $spacing-md;
      color: $font-color-base;

      &:hover {
        color: $primary-color;
      }

      &.mag-link-active {
        color: $primary-color;
      }
    }
  }
}
</style>
