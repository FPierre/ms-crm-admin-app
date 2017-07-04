import logService from '../../api/log-service'

const state = {
  all: []
}

const getters = {
  logs: state => state.all
}

const actions = {
  update ({ commit, state }) {
    logService.update(
      (logs) => commit('updateSuccess', { logs }),
      () => commit('updateFailure')
    )
  }
}

const mutations = {
  updateSuccess (state, { logs }) {
    state.all = logs
  },

  updateFailure (state) {
    console.log('log update failure')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
