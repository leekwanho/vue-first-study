import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import Login from '@/page/login/Login'
import LoginSuccess from '@/page/LoginSuccess/LoginSuccess'

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
      path: '/login',
      name: 'Login',
      component: Login,
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
