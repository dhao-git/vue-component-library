import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueComponentlibrary from './index'

console.log(VueComponentlibrary);

const app = createApp(App);
app.use(VueComponentlibrary)
app.mount('#app')
