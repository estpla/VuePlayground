import * as types from './types'

const mutations = {
  [types.LOADER_SHOW] (state) {
    state.loading = true
  },
  [types.LOADER_HIDE] (state) {
    state.loading = false
  },
  [types.LOADER_SWITCH] (state) {
    state.loading = !state.loading
  }
}

const state = {
  loading: false
}

export default {
  state,
  mutations
}
