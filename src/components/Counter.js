export default {
  template: `
    <div>
    <h2>Count</h2>
     <p>{{ count }}</p>
     <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
     </p>
     <h2>Double Count</h2>
     <p>{{ double }}</p>
     <h2>Count Squared</h2>
     <p>{{ squared }}</p>
    </div>`,
  computed: {
    count () {
      return this.$store.state.count
    },
    double () {
      return this.$store.getters.double
    },
    squared () {
      return this.$store.getters.squared
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
