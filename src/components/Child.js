import store from '../store'

export default {
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
