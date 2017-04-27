import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    getter: state => {
      return 'This a getter that reacts to the current state. Count = ' + state.count
    }
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})
