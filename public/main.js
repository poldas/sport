import Vue from 'vue'

import VueRouter from 'vue-router'
import { configRouter } from './routes.js'
Vue.use(VueRouter)
var router = new VueRouter()
configRouter(router)

Vue.component('pp-menu', require('./components/menu.vue'))

var App = Vue.extend(require('./app.vue'))
router.start(App, '#app')
