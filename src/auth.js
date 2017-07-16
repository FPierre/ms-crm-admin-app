export default {
  user: {
    authenticated: false
  },

  checkAuth () {
    const jwt = localStorage.getItem('tokenId')
    this.user.authenticated = !!jwt
  },

  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('tokenAccess')
    }
  }
}
