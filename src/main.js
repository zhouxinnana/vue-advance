/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'iview';
import ElementUi from 'element-ui';
import 'iview/dist/styles/iview.css'
import 'element-ui/lib/theme-chalk/index.css';
import Loading from '@/views/global-loading/loading';
import { init, bind } from '@/utils/custom-life-cycle.js';
Vue.use(ViewUI)
Vue.use(ElementUi)

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  console.log("router.beforeEach", 'router.beforeEach')
  next()
})
router.beforeResolve((to, from, next) => {
  console.log("router.beforeResolve", 'router.beforeResolve')
  next()
})
router.afterEach( _ => {
  console.log("router.afterEach", 'router.afterEach')
})
init()
const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
bind(vm)