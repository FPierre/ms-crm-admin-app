import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import AgenciesIndex from '@/components/agency/AgenciesIndex'

Vue.use(Router)

// TODO: nested routes
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: { title: 'Login' }
    },
    {
      path: '/agencies',
      name: 'AgenciesIndex',
      component: AgenciesIndex,
      meta: { title: 'Agencies' }
    }
  ]
})
