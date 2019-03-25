import Vue from 'vue'
import store from './vuex/index.js'
import AppLayout from './theme/layout.vue'
import router from './router'

require('./sass/main.scss')

const app = new Vue({
  router,
  ...AppLayout,
  store
})

export { app, router, store }
