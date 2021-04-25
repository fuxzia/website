<template>
  <div class="site-sidebar">
    <div
      v-for="(item, i) in store.state.sidebar"
      :key="i"
      class="site-sidebar-item"
    >
      <span>
        {{ item.label }}
      </span>
      <Link
        v-for="(menu, i) in item.children"
        :key="i"
        :to="menu.link"
      >
        {{ menu.label }}
      </Link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '../store'
import { Link } from '@magenta-ui/vue'

export default defineComponent({
  name: 'Sidebar',
  components: {
    Link,
  },
  setup: () => {
    const store = useStore()

    return { store }
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.site-sidebar {
  position: fixed;
  width: $sidebar-width;
  margin-right: $container-padding;
  overflow: auto;

  &-item {
    margin-top: $spacing-xs;
    margin-bottom: $container-padding;
    > span {
      font-weight: bold;
      display: flex;
      margin-bottom: $spacing-xs;
      color: $font-color-contrast;
    }

    :deep(.mag-link) {
      display: flex;
      line-height: 2;
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
