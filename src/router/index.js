import Vue from 'vue'
import Router from 'vue-router'

import agenciesRoutes from '@/router/agencies'
import leadsRoutes from '@/router/leads'
import logsRoutes from '@/router/logs'
import usersRoutes from '@/router/users'

import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    ...agenciesRoutes,
    ...leadsRoutes,
    ...logsRoutes,
    ...usersRoutes,
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
