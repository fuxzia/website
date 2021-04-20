import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import routes from 'virtual:generated-pages'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const head = createHead()

const app = createApp(App)

app.use(head)
app.use(router)
app.mount('#app')
