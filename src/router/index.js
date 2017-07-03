import Vue from 'vue'
import Router from 'vue-router'
import Logs from '@/components/Logs'
import Login from '@/components/Login'
import AgenciesIndex from '@/components/agency/AgenciesIndex'
import UsersIndex from '@/components/user/UsersIndex'
import UsersShow from '@/components/user/UsersShow'
// import AgenciesNew from '@/components/agency/AgenciesNew'

Vue.use(Router)

// TODO: nested routes
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/agencies',
      name: 'AgenciesIndex',
      component: AgenciesIndex
    },
    {
      path: '/users',
      name: 'UsersIndex',
      component: UsersIndex
    },
    {
      path: '/users/:id',
      name: 'UsersShow',
      component: UsersShow
    },
    {
      path: '/logs',
      name: 'Logs',
      component: Logs
    }
  ]
})
