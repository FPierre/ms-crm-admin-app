import agencyService from '../../api/agency-service'

const state = {
  all: [],
  total: 0,
  pages: 0,
  current: {},
  h: {}
}

const getters = {
  agencies: state => state.all,
  total: state => state.total,
  pages: state => state.pages,
  current: state => state.current,
  history: state => state.h
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
  },

  update ({ commit, state }, agency) {
    return new Promise((resolve, reject) => {
      agencyService.update(
        { agency },
        () => {
          commit('updateSuccess')
          resolve()
        },
        () => {
          commit('updateFailure')
          reject()
        }
      )
    })
  },

  history ({ commit, state }, { id }) {
    agencyService.history(
      { id },
      history => commit('historySuccess', { history }),
      () => commit('historyFailure')
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
  },

  updateSuccess (state) {
    console.log('updateSuccess')
  },

  updateFailure (state) {
    console.log('agency update failure')
  },

  historySuccess (state, { history }) {
    state.h = history
  },

  historyFailure (state) {
    console.log('agencies history failure')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
