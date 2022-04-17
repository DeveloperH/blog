import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/reset.css'
import './assets/css/iconfont.css'
import {request} from './api'
import qs from 'qs'
Vue.prototype.$request = request
Vue.prototype.$qs = qs

import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
