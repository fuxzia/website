<template>
  <router-view></router-view>
</template>

<script lang="ts">
import '@magenta-ui/styles/scss/styles.scss'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style>
#app {
  padding: 30PX;
  margin-top: 60px;
}
</style>
