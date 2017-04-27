import Vue from 'vue'

import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const child = {
  template: `
    <div>
     <p>{{ count }}</p>
     <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
     </p>
    </div>`,
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: child
      }
    }
  ]
})

export default router
