// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import test from './components/test.vue'
const app=createApp(App)
 
//全局注册
//在这中间写组件注册
app.component('Test',test)

app.mount('#app')
