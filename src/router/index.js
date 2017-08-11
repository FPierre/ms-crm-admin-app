import Vue from 'vue'
import Router from 'vue-router'

import agenciesRoutes from '@/router/agencies'
import leadsRoutes from '@/router/leads'
import logsRoutes from '@/router/logs'
import usersRoutes from '@/router/users'
import Login from '@/components/Login'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...agenciesRoutes,
    ...leadsRoutes,
    ...logsRoutes,
    ...usersRoutes,
    {
      path: '/login',
      name: 'Login',
      meta: { isProtected: false },
      component: Login
    },
    {
      path: '/error',
      name: 'Error',
      meta: { isProtected: false, simpleLayout: true },
      component: NotFound
    },
    {
      path: '*',
      redirect: {
        name: 'Error'
      }
    }
  ]
})
