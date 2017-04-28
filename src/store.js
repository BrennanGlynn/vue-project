import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state: {
    count: 100
  }
}

const moduleB = {
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  },
  getters: {
    double: state => {
      return state.count * 2
    },
    squared: (state, getters) => {
      return getters.double * 2
    },
    multiply: state => x => state.count * x
  }
}

export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
