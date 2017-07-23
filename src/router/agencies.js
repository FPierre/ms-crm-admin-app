import { requireAuthentication, componentsLayout } from '@/router/utils'

import AgenciesIndex from '@/components/agency/AgenciesIndex'
import AgenciesShow from '@/components/agency/AgenciesShow'
import AgenciesEdit from '@/components/agency/AgenciesEdit'
import AgenciesNew from '@/components/agency/AgenciesNew'
import AgenciesSearch from '@/components/agency/AgenciesSearch'
import AgenciesNav from '@/components/agency/AgenciesNav'

export default [
  {
    path: '/agencies',
    name: 'AgenciesIndex',
    components: componentsLayout(AgenciesIndex, AgenciesNav),
    beforeEnter: requireAuthentication
  },
  {
    path: '/agencies/new',
    name: 'AgenciesNew',
    components: componentsLayout(AgenciesNew, AgenciesNav),
    beforeEnter: requireAuthentication
  },
  {
    path: '/agencies/search',
    name: 'AgenciesSearch',
    components: componentsLayout(AgenciesSearch, AgenciesNav),
    beforeEnter: requireAuthentication
  },
  {
    path: '/agencies/:id',
    name: 'AgenciesShow',
    components: componentsLayout(AgenciesShow, AgenciesNav),
    beforeEnter: requireAuthentication
  },
  {
    path: '/agencies/:id/edit',
    name: 'AgenciesEdit',
    components: componentsLayout(AgenciesEdit, AgenciesNav),
    beforeEnter: requireAuthentication
  }
]
