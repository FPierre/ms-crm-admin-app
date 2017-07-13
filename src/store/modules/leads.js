import leadService from '../../api/lead-service'

const state = {
  all: [],
  current: {}
}

const getters = {
  current: state => state.current,
  leads: state => state.all
}

const actions = {
  index ({ commit, state }) {
    leadService.index(
      leads => commit('indexSuccess', { leads }),
      () => commit('indexFailure')
    )
  },

  show ({ commit, state }, { id }) {
    leadService.show(
      id,
      lead => commit('showSuccess', { lead }),
      () => commit('showFailure')
    )
  }
}

const mutations = {
  indexSuccess (state, { leads }) {
    state.all = leads
  },

  indexFailure (state) {
    console.log('leads index failure')
  },

  showSuccess (state, { lead }) {
    state.current = lead
  },

  showFailure (state) {
    console.log('leads show failure')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
