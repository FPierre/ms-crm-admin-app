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
      (agencies) => commit(types.INDEX_SUCCESS, { agencies }),
      () => commit(types.INDEX_FAILURE)
    )
  },

  create ({ commit, state }, agency) {
    agencyService.create(
      agency,
      (agency) => commit(types.CREATE_SUCCESS, { agency }),
      () => commit(types.CREATE_FAILURE)
    )
  }
}

const mutations = {
  [types.INDEX_SUCCESS] (state, { agencies }) {
    state.all = agencies
  },

  [types.INDEX_FAILURE] (state) {
    console.log('agencies index fail')
  },

  [types.CREATE_SUCCESS] (state, { agency }) {
    state.all.push(agency)
  },

  [types.CREATE_FAILURE] (state) {
    console.log('agency create fail')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
