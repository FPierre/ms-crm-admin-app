import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import agencies from './modules/agencies'
import leads from './modules/leads'
import logs from './modules/logs'
import users from './modules/users'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  modules: {
    agencies,
    leads,
    logs,
    users
  },
  strict: debug
})
