import { requireAuthentication, componentsLayout } from '@/router/utils'

import LogsIndex from '@/components/log/LogsIndex'
import LogsNav from '@/components/log/LogsNav'

export default [
  {
    path: '/logs',
    name: 'LogsIndex',
    components: componentsLayout(LogsIndex, LogsNav),
    beforeEnter: requireAuthentication
  }
]
