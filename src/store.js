import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    double: state => {
      return state.count * 2
    },
    squared: (state, getters) => {
      return getters.double * 2
    },
    multiply: state => (x) => state.count * x
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})
