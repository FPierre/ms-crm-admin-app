import { requireAuthentication, componentsLayout } from '@/router/utils'

import AgenciesIndex from '@/components/agency/AgenciesIndex'
import AgenciesShow from '@/components/agency/AgenciesShow'
import AgenciesEdit from '@/components/agency/AgenciesEdit'
import AgenciesNew from '@/components/agency/AgenciesNew'
import AgenciesSearch from '@/components/agency/AgenciesSearch'

import AppHeader from '@/components/AppHeader'
import AppSidebar from '@/components/AppSidebar'

export default [
  {
    path: '/agencies',
    name: 'AgenciesIndex',
    components: componentsLayout(AgenciesIndex, AppHeader, AppSidebar)
    // beforeEnter: requireAuthentication
  },
  {
    path: '/agencies/new',
    name: 'AgenciesNew',
    components: componentsLayout(AgenciesNew, AppHeader, AppSidebar),
    beforeEnter: requireAuthentication
  },
  {
    path: '/agencies/search',
    name: 'AgenciesSearch',
    components: componentsLayout(AgenciesSearch, AppHeader, AppSidebar),
    beforeEnter: requireAuthentication
  },
  {
    path: '/agencies/:id',
    name: 'AgenciesShow',
    components: componentsLayout(AgenciesShow, AppHeader, AppSidebar),
    beforeEnter: requireAuthentication
  },
  {
    path: '/agencies/:id/edit',
    name: 'AgenciesEdit',
    components: componentsLayout(AgenciesEdit, AppHeader, AppSidebar),
    beforeEnter: requireAuthentication
  }
]
