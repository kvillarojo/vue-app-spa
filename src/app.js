import Vue from 'vue'
import AppLayout from './theme/layout.vue'
import router from './router'

require('./sass/main.scss')

const app = new Vue({
  router,
  ...AppLayout
})

export { app, router }
