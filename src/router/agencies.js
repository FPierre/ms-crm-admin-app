import AgenciesIndex from '@/components/agency/AgenciesIndex'
import AgenciesShow from '@/components/agency/AgenciesShow'
import AgenciesEdit from '@/components/agency/AgenciesEdit'
import AgenciesNew from '@/components/agency/AgenciesNew'
import AgenciesSearch from '@/components/agency/AgenciesSearch'
import AgenciesNav from '@/components/agency/AgenciesNav'

function components (main) {
  return { default: main, nav: AgenciesNav }
}

export default [
  {
    path: '/agencies',
    name: 'AgenciesIndex',
    components: components(AgenciesIndex)
    // component: AgenciesIndex
  },
  {
    path: '/agencies/:id',
    name: 'AgenciesShow',
    components: AgenciesShow
  },
  {
    path: '/agencies/:id/edit',
    name: 'AgenciesEdit',
    component: AgenciesEdit
  },
  {
    path: '/agencies/new',
    name: 'AgenciesNew',
    component: AgenciesNew
  },
  {
    path: '/agencies/search',
    name: 'AgenciesSearch',
    component: AgenciesSearch
  }
]
