import { createApp } from 'vue'
import { store, key } from './store'
import { router } from './router'
import { head } from './utils'

import App from './App.vue'

const app = createApp(App)

app.use(head)
app.use(store, key)
app.use(router)

app.mount('#app')
