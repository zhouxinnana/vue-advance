/**
 * @ Author: Your name
 * @ Create Time: 2019-12-17 12:18:46
 * @ Modified by: Your name
 * @ Modified time: 2020-08-12 09:14:32
 * @ Description:
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/element-form',
    component: () => import('../views/element/ElementForm.vue')
  },
  {
    path: '/clearData',
    component: () => import('../views/clearData/clearData.vue')
  },
  {
    path: '/radio',
    component: () => import('../views/radio/radio.vue')
  },
  // 父子生命周期的运行顺序
  {
    path: '/lifecycle',
    component: () => import('../views/lifecycle/lifecycle.vue')
  },
  {
    path: '/vforindex',
    name: 'vforindex',
    component: () => import('../views/vforindex/VForIndex.vue')
  },
  {
    path: '/keep',
    name: 'keep',
    component: () => import('../views/keep/Keep.vue')
  },
  {
    path: '/byval',
    name: 'byval',
    component: () => import('../views/Byval.vue')
  },
  {
    path: '/formShow',
    name: 'formShow',
    component: () => import('../views/formShow/formShow.vue')
  },
  {
    path: '/directives',
    name: 'directives',
    component: () => import('../views/Directives.vue')
  },
  {
    path: '/optimize-arry',
    name: 'optimize-arry',
    component: () => import('../views/optimize-arry.vue')
  },
  {
    path: '/jsx',
    name: 'jsx',
    component: () => import('../views/Jsx.vue')
  },
  {
    path: '/special',
    name: 'Special',
    component: () => import('../views/special/Special.vue')
  },
  {
    path: '/mini-vuex',
    name: 'mini-vuex',
    component: () => import('../views/miniVuex/miniVuex.vue')
  },
  {
    path: '/loading',
    name: 'loading',
    component: () => import('../views/global-loading/index.vue')
  },
  {
    path: '/editForm',
    name: 'editForm',
    component: () => import('../views/editForm/editForm.vue')
  },
  {
    path: '/slot-demo',
    name: 'slot-demo',
    component: () => import('../views/slot-demo/slot-demo.vue')
  },
  {
    path: '/extension-dialog',
    name: 'extension-dialog',
    component: () => import('../views/extension-dialog/extension-dialog.vue')
  },
  {
    path: '/custom-life-cycle',
    name: 'custom-life-cycle',
    component: () => import('../views/custom-life-cycle/custom-life-cycle.vue')
  },
  {
    path: '/provide-inject',
    name: 'provide-inject',
    component: () => import('../views/provide-inject/provide-inject.vue')
  },
  {
    path: '/jsx-demo',
    name: 'jsx-demo',
    component: () => import('../views/jsx-demo/jsx-demo.vue')
  },
  {
    path: '/text-decorator',
    name: 'text-decorator',
    component: () => import('../views/text-decorator/text-decorator.vue')
  },
]

const router = new VueRouter({
  routes
})


export default router
