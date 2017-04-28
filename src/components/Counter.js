import { mapGetters, mapMutations } from 'vuex'

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
     <h2>Double Squared</h2>
     <p>{{ doubleSquared }}</p>
     <h2>Multiplied by:</h2>
     <input v-model="variable" type="number">
     <br>
     {{ multiply(variable) }}
     <h2>State of module A</h2>
     {{ countOfA }}
     <h2>moduleA count + rootState count</h2>
     {{ sumOfBoth }}
    </div>`,
  computed: {
    count () {
      return this.$store.state.count
    },
    ...mapGetters([
      'double',
      'doubleSquared',
      'multiply',
      'countOfA',
      'sumOfBoth'
    ])
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ])
  },
  data: function () {
    return {
      variable: ''
    }
  }
}
