import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueFireworks from 'vue3-damp-fireworks'

const app = createApp(App)

app.use(router)
app.use(VueFireworks)

app.mount('#app')