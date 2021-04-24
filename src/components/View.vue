<template>
  <div :class="computedClasses">
    <Header />
    <div class="site-view-wrapper">
      <Sidebar v-if="sidebar" />
      <div class="site-view-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'

export default defineComponent({
  name: 'View',
  components: {
    Header,
    Sidebar,
  },
  props: {
    sidebar: {
      type: Boolean,
      default: true,
    },
  },
  setup: (props) => {
    const computedClasses = computed(() => {
      return [
        'site-view',
        {
          'has-sidebar': props.sidebar
        }
      ]
    })

    return { computedClasses }
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.site-view {
  display: flex;
  align-items: center;
  justify-content: center;

  &.has-sidebar {
    .site-view-content {
      margin-left: $sidebar-width + $container-padding;
    }
  }

  &-wrapper {
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: $header-height $container-padding;
    padding-top: $container-padding * 2;
    max-width: $container-width;
  }

  &-content {
    max-width: $content-width;
  }
}
</style>
