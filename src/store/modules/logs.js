import logService from '../../api/log-service'

const state = {
  all: [],
  connected: false
}

const getters = {
  logs: state => state.all,
  connected: state => state.connected
}

const actions = {
  stream ({ commit, state }) {
    logService.stream(
      logs => commit('streamSuccess', { logs }),
      () => commit('streamFailure')
    )
  }
}

const mutations = {
  streamSuccess (state, { logs }) {
    state.all = logs
    state.connected = true
  },

  streamFailure (state) {
    console.log('log update failure')
    state.connected = false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
