import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      name: ''
    }
  },
  mutations: {
    change(state, name) {
      state.name = name
    }
  },
  actions: {
  },
  modules: {
  }
})
