import agencyService from '../../api/agency-service'
import * as types from '../mutation-types'

const state = {
  all: {}
}

const getters = {
  agencies: state => state.all
}

const actions = {
  index ({ commit, state }) {
    agencyService.index(
      (agencies) => commit(types.LOGIN_SUCCESS, { agencies }),
      () => commit(types.LOGIN_FAILURE)
    )
  }
}

const mutations = {
  [types.LOGIN_SUCCESS] (state, { agencies }) {
    state.all = agencies
  },

  [types.LOGIN_FAILURE] (state) {
    console.log('agencies index fail')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
