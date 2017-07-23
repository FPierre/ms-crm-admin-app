import { requireAuthentication, componentsLayout } from '@/router/utils'

import LeadsIndex from '@/components/lead/LeadsIndex'
import LeadsShow from '@/components/lead/LeadsShow'
import LeadsNav from '@/components/lead/LeadsNav'

export default [
  {
    path: '/leads',
    name: 'LeadsIndex',
    component: componentsLayout(LeadsIndex, LeadsNav),
    beforeEnter: requireAuthentication
  },
  {
    path: '/leads/:id',
    name: 'LeadsShow',
    components: componentsLayout(LeadsShow, LeadsNav),
    beforeEnter: requireAuthentication
  }
]
