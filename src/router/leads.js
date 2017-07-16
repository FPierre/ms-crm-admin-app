import LeadsIndex from '@/components/lead/LeadsIndex'
import LeadsShow from '@/components/lead/LeadsShow'

import AppHeader from '@/components/AppHeader'
import LeadsNav from '@/components/lead/LeadsNav'
import AppFooter from '@/components/AppFooter'

function components (main) {
  return {
    default: main,
    header: AppHeader,
    nav: LeadsNav,
    footer: AppFooter
  }
}

export default [
  {
    path: '/leads',
    name: 'LeadsIndex',
    component: components(LeadsIndex)
  },
  {
    path: '/leads/:id',
    name: 'LeadsShow',
    components: components(LeadsShow)
  }
]
