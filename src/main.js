// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueQuillEditor from 'vue-quill-editor'
import VueRx from 'vue-rx'
import axios from 'axios'
//
import VueAwesomeSwiper from 'vue-awesome-swiper'
import html2canvas from 'html2canvas'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
//
import 'swiper/dist/css/swiper.css'

Vue.use(VueRx)

Vue.use(VueAwesomeSwiper)
Vue.use(VueQuillEditor)
// Vue.use(html2canvas)
Vue.config.productionTip = false

const base = axios.create({
  baseURL: 'https://www.truesales.vn/api',
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token')
  }
})

Vue.prototype.$http = base

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
