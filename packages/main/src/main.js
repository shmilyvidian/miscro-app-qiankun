import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun';
import router from './router'

Vue.config.productionTip = false

registerMicroApps([
  {
    name: 'vue app', // app name registered
    entry: '//localhost:9000',
    container: '#microApp',
    activeRule: '/sub_vue',
  },
  {
    name: 'react app',
    entry: '//localhost:3000',
    container: '#microApp',
    activeRule: '/sub_react',
  },
])

//启动应用
start();

new Vue({
    router,
    render: h => h(App)
  }).$mount('#app');