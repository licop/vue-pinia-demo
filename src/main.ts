import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Element from 'element-plus'
import 'element-plus/dist/index.css' 
import App from './App.vue'

import './style.css'

const app = createApp(App)

app.use(createPinia()).use(Element)

app.mount('#app')
