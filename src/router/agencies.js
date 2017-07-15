import AgenciesIndex from '@/components/agency/AgenciesIndex'
import AgenciesNew from '@/components/agency/AgenciesNew'
import AgenciesShow from '@/components/agency/AgenciesShow'
import AgenciesEdit from '@/components/agency/AgenciesEdit'
import AgenciesSearch from '@/components/agency/AgenciesSearch'

export default [
  {
    path: '/agencies',
    name: 'AgenciesIndex',
    component: AgenciesIndex
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
