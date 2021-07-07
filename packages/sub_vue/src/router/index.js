import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sub_vue',
    redirect: '/sub_vue/home'
  },
  {
    path: '/sub_vue', // 这里是主应用的activeRule
    name: 'sub_vue',
    component: () => import('@/views/index.vue'), // 用一个空的页面来包裹子路由，也可以不是空的，看需求
    children: [ // 必须用子路由，后面的路由也是写在子路由里面
      { path: '/sub_vue/home', component: () => import("@/views/Home.vue") },
      { path: '/sub_vue/About', component: () => import("@/views/About.vue") }
    ]
  }
    // { path: '/', redirect: '/home' },
    
  ]
export default new VueRouter({
  // base: process.env.BASE_URL,
  // mode: 'history',
  routes,
})