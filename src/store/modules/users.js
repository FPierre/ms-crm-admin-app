import userService from '../../api/user-service'

const state = {
  all: [],
  user: {}
}

const getters = {
  user: state => state.user,
  users: state => state.all
}

const actions = {
  index ({ commit, state }) {
    userService.index(
      users => commit('indexSuccess', { users }),
      () => commit('indexFailure')
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
