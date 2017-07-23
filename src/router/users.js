import { requireAuthentication, componentsLayout } from '@/router/utils'

import UsersIndex from '@/components/user/UsersIndex'
import UsersShow from '@/components/user/UsersShow'
import UsersNew from '@/components/user/UsersNew'
import UsersNav from '@/components/user/UsersNav'

export default [
  {
    path: '/users',
    name: 'UsersIndex',
    components: componentsLayout(UsersIndex, UsersNav),
    beforeEnter: requireAuthentication
  },
  {
    path: '/users/new',
    name: 'UsersNew',
    component: componentsLayout(UsersNew, UsersNav),
    beforeEnter: requireAuthentication
  },
  {
    path: '/users/:id',
    name: 'UsersShow',
    components: componentsLayout(UsersShow, UsersNav),
    beforeEnter: requireAuthentication
  }
]
