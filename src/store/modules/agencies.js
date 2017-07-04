import agencyService from '../../api/agency-service'

const state = {
  all: []
}

const getters = {
  agencies: state => state.all
}

const actions = {
  index ({ commit, state }) {
    agencyService.index(
      agencies => commit('indexSuccess', { agencies }),
      () => commit('indexFailure')
    )
  },

  create ({ commit, state }, agency) {
    agencyService.create(
      agency,
      agency => commit('createSuccess', { agency }),
      () => commit('createFailure')
    )
  }
}

const mutations = {
  indexSuccess (state, { agencies }) {
    state.all = agencies
  },

  indexFailure (state) {
    console.log('agencies index failure')
  },

  createSuccess (state, { agency }) {
    state.all.push(agency)
  },

  createFailure (state) {
    console.log('agency create failure')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
