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

// tinymce 富文本编辑器
import tinymce from 'tinymce'
import VueTinymce from '@packy-tang/vue-tinymce/src/vue-tinymce.vue'
Vue.prototype.$tinymce = tinymce
Vue.use(VueTinymce)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
