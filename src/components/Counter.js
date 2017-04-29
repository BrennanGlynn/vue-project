import { mapState, mapGetters, mapMutations } from 'vuex'

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
     <h3>State of module A</h3>
     {{ countOfA }}
     <h3>State of module B</h3>
     {{ countOfB }}
     <h3>moduleA count + rootState count</h3>
     {{ aWithRoot }}
     <h3>moduleB count + rootState count</h3>
     {{ bWithRoot }}
     <h3>a + b + rootState</h3>
     {{ count + countOfA + countOfB }}
    </div>`,
  computed: {
    ...mapState([
      'count'
    ]),
    ...mapGetters([
      'double',
      'doubleSquared',
      'multiply',
      'countOfA',
      'countOfB',
      'aWithRoot',
      'bWithRoot'
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
