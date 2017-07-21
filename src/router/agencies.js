import AgenciesIndex from '@/components/agency/AgenciesIndex'
import AgenciesShow from '@/components/agency/AgenciesShow'
import AgenciesEdit from '@/components/agency/AgenciesEdit'
import AgenciesNew from '@/components/agency/AgenciesNew'
import AgenciesSearch from '@/components/agency/AgenciesSearch'

import AppHeader from '@/components/AppHeader'
import AgenciesNav from '@/components/agency/AgenciesNav'
import AppFooter from '@/components/AppFooter'

function components (main) {
  return {
    default: main,
    header: AppHeader,
    nav: AgenciesNav,
    footer: AppFooter
  }
}

export default [
  {
    path: '/agencies',
    name: 'AgenciesIndex',
    components: components(AgenciesIndex)
  },
  {
    path: '/agencies/new',
    name: 'AgenciesNew',
    components: components(AgenciesNew)
  },
  {
    path: '/agencies/search',
    name: 'AgenciesSearch',
    components: components(AgenciesSearch)
  },
  {
    path: '/agencies/:id',
    name: 'AgenciesShow',
    components: components(AgenciesShow)
  },
  {
    path: '/agencies/:id/edit',
    name: 'AgenciesEdit',
    components: components(AgenciesEdit)
  }
]
