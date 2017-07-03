import userService from '../../api/user-service'
import * as types from '../mutation-types'

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
      users => commit(types.INDEX_SUCCESS, { users }),
      () => commit(types.INDEX_FAILURE)
    )
  },

  login ({ commit, state }, userCredentials) {
    userService.login(
      userCredentials,
      user => commit(types.LOGIN_SUCCESS, { user }),
      () => commit(types.LOGIN_FAILURE)
    )
  }
}

const mutations = {
  [types.INDEX_SUCCESS] (state, { users }) {
    state.all = users
  },

  [types.INDEX_FAILURE] (state) {
    console.log('index fail')
  },

  [types.LOGIN_SUCCESS] (state, { user }) {
    state.user = user
  },

  [types.LOGIN_FAILURE] (state) {
    console.log('login fail')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
