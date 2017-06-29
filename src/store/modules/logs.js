import logService from '../../api/log-service'
import * as types from '../mutation-types'

const state = {
  all: []
}

const getters = {
  logs: state => state.all
}

const actions = {
  update ({ commit, state }) {
    logService.update(
      (logs) => commit(types.UPDATE_SUCCESS, { logs }),
      () => commit(types.UPDATE_FAILURE)
    )
  }
}

const mutations = {
  [types.UPDATE_SUCCESS] (state, { logs }) {
    console.log('UPDATE_SUCESS')
    state.all = logs
  },

  [types.UPDATE_FAILURE] (state) {
    console.log('UPDATE_FAILURE')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
