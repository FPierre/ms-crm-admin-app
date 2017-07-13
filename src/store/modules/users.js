import userService from '../../api/user-service'

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

  login ({ commit, state }, userCredentials) {
    userService.login(
      userCredentials,
      user => commit('loginSuccess', { user }),
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

  loginSuccess (state, { user }) {
    state.user = user
  },

  loginFailure (state) {
    console.log('login failure')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
