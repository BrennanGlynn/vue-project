import { mapGetters } from 'vuex'

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
     <h2>Multiplied by:</h2>
     <input v-model="variable" type="number">
     <br>
     {{ multiply(variable) }}
    </div>`,
  computed: {
    count () {
      return this.$store.state.count
    },
    ...mapGetters([
      'double',
      'squared',
      'multiply'
    ])
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  },
  data: function () {
    return {
      variable: ''
    }
  }
}
