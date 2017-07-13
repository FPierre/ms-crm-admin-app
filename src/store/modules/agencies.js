import agencyService from '../../api/agency-service'

const state = {
  all: [],
  current: {}
}

const getters = {
  current: state => state.current,
  agencies: state => state.all
}

const actions = {
  index ({ commit, state }) {
    agencyService.index(
      agencies => commit('indexSuccess', { agencies }),
      () => commit('indexFailure')
    )
  },

  show ({ commit, state }, { id }) {
    agencyService.show(
      id,
      agency => commit('showSuccess', { agency }),
      () => commit('showFailure')
    )
  },

  create ({ commit, state }, { agency, user }) {
    agencyService.create(
      { agency, user },
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

  showSuccess (state, { agency }) {
    state.current = agency
  },

  showFailure (state) {
    console.log('agencies show failure')
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
