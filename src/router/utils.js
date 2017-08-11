import store from '@/store'

export function requireAuthentication (to, from, next) {
  const isProtected = to.meta.isProtected
  const isAuthenticated = store.getters['authentication/isAuthenticated']

  console.log(to.path)
  console.log('isProtected', isProtected)
  console.log('isAuthenticated', isAuthenticated)

  // Unprotected routes must be explicitly declared
  if (isProtected !== false && !isAuthenticated) {
    console.log('Protected page but not authenticated. Redirect to /error')
    next({
      name: 'Error',
      query: { redirect: to.fullPath }
    })
  }
}

export function componentsLayout (main, header = null, sidebar = null) {
  return {
    default: main,
    header,
    sidebar
  }
}
