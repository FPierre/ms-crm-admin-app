import Vue from 'vue'
import Router from 'vue-router'
import Logs from '@/components/Logs'
import Login from '@/components/Login'
import AgenciesIndex from '@/components/agency/AgenciesIndex'
import UsersShow from '@/components/user/UsersShow'
import AgenciesNew from '@/components/agency/AgenciesNew'

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
      components: { default: AgenciesIndex, modal: AgenciesNew }
    },
    {
      path: '/users/:id',
      name: 'UsersShow',
      components: UsersShow,
      props: true
    },
    {
      path: '/logs',
      name: 'Logs',
      components: { default: Logs }
    }
  ]
})
