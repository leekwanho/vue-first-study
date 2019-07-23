import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import Signup from '@/page/signup/Signup'
import Login from '@/page/login/Login'
import LoginSuccess from '@/page/LoginSuccess/LoginSuccess'
import LoginSuccess2 from '@/page/LoginSuccess2/LoginSuccess2'

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
      path: '/signup',
      name: 'Signup',
      component: Signup,
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
    },
    {
      path: '/loginSuccess2',
      name: 'LoginSuccess2',
      component: LoginSuccess2,
      props: true
    }
  ]
})
