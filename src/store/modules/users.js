import userService from '@/api/user-service'
// import auth from '@/auth'

const state = {
  all: [],
  total: 0,
  pages: 0,
  current: {}
}

const getters = {
  users: state => state.all,
  total: state => state.total,
  pages: state => state.pages,
  current: state => state.current
}

const actions = {
  index ({ commit, state }, { page }) {
    userService.index(
      { page },
      ({ docs, total, pages }) => commit('indexSuccess', { docs, total, pages }),
      () => commit('indexFailure')
    )
  },

  show ({ commit, state }, { id }) {
    userService.show(
      id,
      user => commit('showSuccess', { user }),
      () => commit('showFailure')
    )
  },

  create ({ commit, state }, { user }) {
    userService.create(
      user,
      user => commit('createSuccess', { user }),
      () => commit('createFailure')
    )
  },

  login ({ commit, state }, { credentials }) {
    // auth.login(credentials, 'secretquote')

    userService.login(
      credentials,
      ({ tokenId, tokenAccess }) => commit('loginSuccess', { tokenId, tokenAccess }),
      () => commit('loginFailure')
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
    console.log('index failure')
  },

  showSuccess (state, { user }) {
    state.current = user
  },

  showFailure (state) {
    console.log('users show failure')
  },

  createSuccess (state, { user }) {
    console.log('users create success')
  },

  createFailure (state) {
    console.log('users create failure')
  },

  loginSuccess (state, { tokenId, tokenAccess }) {
    localStorage.setItem('tokenId', tokenId)
    localStorage.setItem('tokenAccess', tokenAccess)
  },

  loginFailure (state) {
    console.log('users login failure')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
