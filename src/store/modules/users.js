import userService from '@/api/user-service'
// import auth from '@/auth'

const state = {
  all: [],
  current: {}
}

const getters = {
  current: state => state.current,
  users: state => state.all
}

const actions = {
  index ({ commit, state }) {
    userService.index(
      users => commit('indexSuccess', { users }),
      () => commit('indexFailure')
    )
  },

  show ({ commit, state }, { id }) {
    userService.show(
      id,
      user => commit('showSuccess', { user }),
      () => commit('showFailure')
    )
  },

  create ({ commit, state }, { user }) {
    userService.create(
      user,
      user => commit('createSuccess', { user }),
      () => commit('createFailure')
    )
  },

  login ({ commit, state }, { credentials }) {
    // auth.login(credentials, 'secretquote')

    userService.login(
      credentials,
      ({ tokenId, tokenAccess }) => commit('loginSuccess', { tokenId, tokenAccess }),
      () => commit('loginFailure')
    )
  }
}

const mutations = {
  indexSuccess (state, { users }) {
    console.log('index success')
    state.all = users
  },

  indexFailure (state) {
    console.log('index failure')
  },

  showSuccess (state, { user }) {
    state.current = user
  },

  showFailure (state) {
    console.log('users show failure')
  },

  createSuccess (state, { user }) {
    console.log('users create success')
  },

  createFailure (state) {
    console.log('users create failure')
  },

  loginSuccess (state, { tokenId, tokenAccess }) {
    localStorage.setItem('tokenId', tokenId)
    localStorage.setItem('tokenAccess', tokenAccess)
  },

  loginFailure (state) {
    console.log('users login failure')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
