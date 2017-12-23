// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

import VuexStore from '@/vuex/store'
import { sync } from 'vuex-router-sync'

import $ from 'jquery'
import DataTables from 'datatables.net'
import 'datatables.net-dt/css/jquery.datatables.css'

Vue.config.productionTip = false

window.$ = $
window.DataTables = DataTables

Vue.use(Vuex)

const store = new Vuex.Store(VuexStore)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
