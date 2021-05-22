import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

window.hack = function() {
  document.getElementById('Button1').disabled = false
  return 'Uspeh'
}
