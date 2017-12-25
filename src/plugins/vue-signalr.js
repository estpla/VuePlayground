// import Vue from 'vue'
import { hubConnection } from 'signalr-no-jquery'

const VueSignalR = {}
export const SIGNALR_CONNECTED = 'SIGNALR_CONNECTED'
export const SIGNALR_NOT_CONNECTED = 'SIGNALR_NOT_CONNECTED'

const VuexSignalR = {
  state: {
    connected: false,
    hubname: null,
    connectionId: null
  },
  mutations: {
    [SIGNALR_CONNECTED] (state, payload) {
      state.connected = true
      state.hubname = payload.hubname
      state.connectionId = payload.connectionId
    },
    [SIGNALR_NOT_CONNECTED] (state) {
      state.connected = false
      state.hubname = null
      state.connectionId = null
    }
  },
  actions: {
  },
  getters: {
  }
}

VueSignalR.install = function (Vue, url, hubname, store, options) {
  console.log('install')

  if (!url) { throw new Error('[vue-signalr] cannot locate url') }
  if (!hubname) { throw new Error('[vue-signalr] cannot locate hubname') }

  console.log('VueSignalR mounted!')

  store.registerModule('signalr', VuexSignalR)

  const connection = hubConnection(url)
  const hubProxy = connection.createHubProxy(hubname)

  Vue.prototype.$hub = hubProxy

  // set up event listeners i.e. for incoming "message" event
  hubProxy.on('broadcast', function (message) {
    console.log('Received broadcast', message)
  })

  // connect
  connection.start()
    .done(function () {
      console.log('Now connected, connection ID=' + connection.id)
      store.commit('SIGNALR_CONNECTED', { hubname: hubname, connectionId: connection.id })
    })
    .fail(function () {
      console.log('Could not connect')
      store.commit('SIGNALR_NOT_CONNECTED')
    })
}

export default VueSignalR
