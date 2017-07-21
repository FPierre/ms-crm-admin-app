import authenticationService from '@/api/authentication-service'

const state = {
  token: null
}

const getters = {
  isAuthenticated: state => state.token !== null
}

const actions = {
  signIn ({ commit }, { email, password }) {
    console.log('vuex action signIn', { email, password })

    authenticationService.signIn(
      { email, password },
      token => {
        commit('storeToken', token)
        commit('signInSuccess')
      },
      () => commit('signInFailure')
    )
  },

  test ({ commit, state, getters }) {
    console.log('vuex action test')

    const token = state.token

    if (getters.isAuthenticated) {
      authenticationService.test(
        { token },
        email => commit('testSuccess', email),
        () => commit('testFailure')
      )
    } else {
      console.log('vuex action test token not found or not authenticated')
    }
  }
}

const mutations = {
  storeToken (state, token) {
    state.token = token
    localStorage.setItem('socketToken', token)
  },

  clearToken (state) {
    state.token = null
    localStorage.removeItem('socketToken')
  },

  signInSuccess (state) {
    console.log('signIn success')
  },

  signInFailure (state) {
    console.log('signIn failure')
  },

  testSuccess (state, email) {
    console.log('test success', email)
  },

  testFailure (state) {
    console.log('test failure')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
