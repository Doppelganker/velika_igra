import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

const app = createApp(App).use(router).mount('#app')

window.hack = function() {
  app.$refs.foo.check = false
}
