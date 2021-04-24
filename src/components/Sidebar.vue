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
      <router-link
        v-for="(menu, i) in item.children"
        :key="i"
        :to="menu.link"
      >
        {{ menu.label }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '../store'

export default defineComponent({
  name: 'Sidebar',
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
    }

    > a {
      display: flex;
      line-height: 2;
    }
  }
}
</style>
