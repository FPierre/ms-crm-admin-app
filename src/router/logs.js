import LogsIndex from '@/components/log/LogsIndex'
import LogsNav from '@/components/log/LogsNav'

function components (main) {
  return { default: main, nav: LogsNav }
}

export default [
  {
    path: '/logs',
    name: 'LogsIndex',
    components: components(LogsIndex)
  }
]
