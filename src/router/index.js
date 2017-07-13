import Vue from 'vue'
import Router from 'vue-router'
import Logs from '@/components/Logs'
import Login from '@/components/Login'
import AgenciesIndex from '@/components/agency/AgenciesIndex'
import AgenciesShow from '@/components/agency/AgenciesShow'
import AgenciesNew from '@/components/agency/AgenciesNew'
import LeadsIndex from '@/components/lead/LeadsIndex'
import LeadsShow from '@/components/lead/LeadsShow'
import UsersIndex from '@/components/user/UsersIndex'
import UsersShow from '@/components/user/UsersShow'

Vue.use(Router)

// TODO: nested routes
export default new Router({
  routes: [
    { path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/agencies',
      name: 'AgenciesIndex',
      component: AgenciesIndex
    },
    {
      path: '/agencies/new',
      name: 'AgenciesNew',
      component: AgenciesNew
    },
    {
      path: '/agencies/:id',
      name: 'AgenciesShow',
      component: AgenciesShow
    },
    {
      path: '/leads',
      name: 'LeadsIndex',
      component: LeadsIndex
    },
    {
      path: '/leads/:id',
      name: 'LeadsShow',
      component: LeadsShow
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
