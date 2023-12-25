import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null,
    isAuthenticated: false
  },
  getters: {
    isAuthentication: (state) => !!state.token
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    clearToken(state) {
      state.token = null
    },
    setAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    }
  },
  actions: {
    login({commit}, token) {
      commit('setAuthentication', true)
      commit('setToken', token);
    },
    logout({commit}) {
      commit('setAuthentication', false)
      commit('clearToken');
    }
  },
  modules: {
  }
})
