import LeadsIndex from '@/components/lead/LeadsIndex'
import LeadsShow from '@/components/lead/LeadsShow'

export default [
  {
    path: '/leads',
    name: 'LeadsIndex',
    component: LeadsIndex
  },
  {
    path: '/leads/:id',
    name: 'LeadsShow',
    components: LeadsShow
  }
]
