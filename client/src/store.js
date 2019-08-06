import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SET_AUTHETICATION: "SET_AUTHETICATION",
  SET_USER: 'SET_USER'
}

const state = {
  isAuthenticated: false,
  user: {}
}
const getters = {
  // 获取
  isAuthenticated: state => state.isAuthenticated,
  user: state => state.user
}
const mutations = {
  // 更改
  [types.SET_AUTHETICATION](state, isAuthenticated) {
    if (isAuthenticated) state.isAuthenticated = isAuthenticated
    else state.isAuthenticated = false
  },
  [types.SET_USER](state, user) {
    if (user) state.user = user
    else state.user = {}
  }
}
const actions = {
  setAuthenticated: ({ commit },isAuthenticated) => {
    commit(types.SET_AUTHETICATION, isAuthenticated)
  },
  setUser: ({ commit }, user) => {
    commit(types.SET_USER, user)
  },
  clearCurrentState: ({ commit }) => {
    commit(types.SET_AUTHETICATION, false)
    commit(types.SET_USER, null)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
