import myapi from '@/api/api'
import * as types from './types'
import * as loaderTypes from './modules/types'

import loader from './modules/loader'

export default {
  state: {
    count: 0,
    status: 'DOING NOTHING',
    data: {},
    error: {}
  },
  mutations: {
    increment (state) {
      state.count++
    },
    [types.YES_NO_REQUEST] (state) {
      state.status = 'REQUESTING...'
      this.commit(loaderTypes.LOADER_SHOW)
    },
    [types.YES_NO_SUCCESS] (state, payload) {
      state.status = 'DONE!'
      state.data = payload
      this.commit(loaderTypes.LOADER_HIDE)
    },
    [types.YES_NO_FAILURE] (state, payload) {
      state.status = 'ERROR'
      state.error = payload
      this.commit(loaderTypes.LOADER_HIDE)
    }
  },
  actions: {
    getyesno ({ commit, state }) {
      commit(types.YES_NO_REQUEST)
      // Timeout para simular que la petición tarda y poder ver el loader
      setTimeout(() => {
        myapi.getyesno()
          .then((res) => commit(types.YES_NO_SUCCESS, res.data))
          .catch((error) => commit(types.YES_NO_FAILURE, error))
      }, 3000)
    }
  },
  modules: {
    loader
  }
}
