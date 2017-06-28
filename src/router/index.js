import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import AgenciesIndex from '@/components/agency/AgenciesIndex'
import AgenciesNew from '@/components/agency/AgenciesNew'

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
      components: { default: AgenciesIndex, modal: AgenciesNew },
      meta: { title: 'Agencies' }
    }
  ]
})
