import agencyService from '../../api/agency-service'

const state = {
  all: [],
  total: 0,
  pages: 0,
  current: {}
}

const getters = {
  agencies: state => state.all,
  total: state => state.total,
  pages: state => state.pages,
  current: state => state.current
}

const actions = {
  index ({ commit, state }, { page, query }) {
    agencyService.index(
      { page, query },
      ({ docs, total, pages }) => commit('indexSuccess', { docs, total, pages }),
      () => commit('indexFailure')
    )
  },

  show ({ commit, state }, { id }) {
    agencyService.show(
      { id },
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
  indexSuccess (state, { docs, total, pages }) {
    state.all = docs
    state.total = total
    state.pages = pages
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
