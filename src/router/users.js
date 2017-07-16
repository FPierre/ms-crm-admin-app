import UsersIndex from '@/components/user/UsersIndex'
import UsersShow from '@/components/user/UsersShow'
import UsersNew from '@/components/user/UsersNew'

import AppHeader from '@/components/AppHeader'
import UsersNav from '@/components/user/UsersNav'
import AppFooter from '@/components/AppFooter'

function components (main) {
  return {
    default: main,
    header: AppHeader,
    nav: UsersNav,
    footer: AppFooter
  }
}

export default [
  {
    path: '/users',
    name: 'UsersIndex',
    components: components(UsersIndex)
  },
  {
    path: '/users/:id',
    name: 'UsersShow',
    components: components(UsersShow)
  },
  {
    path: '/users/new',
    name: 'UsersNew',
    component: components(UsersNew)
  }
]
