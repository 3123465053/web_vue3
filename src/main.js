// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import test from './components/test.vue'
//创建应用实例
const app=createApp(App)
 
//全局注册
//在这中间写组件注册
app.component('Test',test)
app.provide('globle',"全局数据 main.js 中提供")
app.mount('#app')
