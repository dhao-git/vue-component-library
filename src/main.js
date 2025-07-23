import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import * as VueComponentlibrary from './index'

import { utils } from './index';

console.log(VueComponentlibrary);
console.log(utils);


const app = createApp(App);
app.use(VueComponentlibrary.default)
app.mount('#app')
