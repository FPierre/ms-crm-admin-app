import UsersIndex from '@/components/user/UsersIndex'
import UsersNew from '@/components/user/UsersNew'
import UsersShow from '@/components/user/UsersShow'

export default [
  {
    path: '/users',
    name: 'UsersIndex',
    component: UsersIndex
  },
  {
    path: '/users/:id',
    name: 'UsersShow',
    components: UsersShow
  },
  {
    path: '/users/new',
    name: 'UsersNew',
    component: UsersNew
  }
]
