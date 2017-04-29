import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state: {
    count: 100
  },
  getters: {
    countOfA: state => state.count,
    aWithRoot (state, getters, rootState) {
      return state.count + rootState.count
    }
  }
}

const moduleB = {
  nameSpaced: true,
  state: {
    count: 0
  },
  getters: {
    countOfB: state => state.count,
    bWithRoot (state, getters, rootState) {
      return state.count + rootState.count
    }
  },
  mutations: {
    increment: state => state.count++
  }

}

export default new Vuex.Store({
  state: {
    count: 0
  },
  modules: {
    a: moduleA,
    b: moduleB
  },
  getters: {
    double: state => {
      return state.count * 2
    },
    doubleSquared: (state, getters) => {
      return getters.double * getters.double
    },
    multiply: state => x => state.count * x
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})
