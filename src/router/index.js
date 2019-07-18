import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Page2 from '@/components/Page2'
import LoginSuccess from '@/components/LoginSuccess/LoginSuccess'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      alias: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2,
      props: true
    },
    {
      path: '/loginSuccess',
      name: 'LoginSuccess',
      component: LoginSuccess,
      props: true
    }
  ]
})
