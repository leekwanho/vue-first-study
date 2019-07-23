// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSidebarMenu from 'vue-sidebar-menu'
import BootstrapVue from 'bootstrap-vue'
import { store } from '@/store/store'
import VeeValidate from 'vee-validate'

Vue.use(VueSidebarMenu)
Vue.use(BootstrapVue)
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
