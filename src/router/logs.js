import LogsIndex from '@/components/log/LogsIndex'

import AppHeader from '@/components/AppHeader'
import LogsNav from '@/components/log/LogsNav'
import AppFooter from '@/components/AppFooter'

function components (main) {
  return {
    default: main,
    header: AppHeader,
    nav: LogsNav,
    footer: AppFooter
  }
}

export default [
  {
    path: '/logs',
    name: 'LogsIndex',
    components: components(LogsIndex)
  }
]
