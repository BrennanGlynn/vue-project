export default {
  template: `
    <div>
     <p>{{ count }}</p>
     <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
     </p>
     {{ getter }}
    </div>`,
  computed: {
    count () {
      return this.$store.state.count
    },
    getter () {
      return this.$store.getters.getter
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  }
}
