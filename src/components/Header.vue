<template>
  <div class="site-header">
    <div class="site-header-container">
      <slot name="logo">
        <Link to="/" class="site-header-logo">
          <img src="../assets/images/logo-complete.svg" />
        </Link>
      </slot>
      <div class="site-header-menu">
        <Link
          v-for="(menu, i) in menus"
          :key="i"
          :to="menu.link"
          :target="menu.link.startsWith('http') ? '_blank' : null"
          :class="getMenuClasses(menu)"
        >
          <Button v-if="menu.button" :label="menu.label" secondary />
          <span v-else>{{ menu.label }}</span>
        </Link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { MenuLink, useStore } from '../store'
import { useRoute } from 'vue-router'
import { Button, Link } from '@magenta-ui/vue'

export default defineComponent({
  name: 'Header',
  components: {
    Button,
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

    const menus = computed(() => {
      return store.state.menus.filter((item: MenuLink) => !item.button)
    })

    return { menus, getMenuClasses }
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
      height: 30px !important;
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
