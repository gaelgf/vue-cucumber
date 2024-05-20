import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import './assets/scss/main.scss'

if (process.env.NODE_ENV === 'development') {
  import('@vue/devtools').then(devtools => devtools.connect())
}
  
const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
