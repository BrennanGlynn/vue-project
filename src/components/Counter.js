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
     <h2>State of module A</h2>
     {{ countOfA }}
     <h2>State of module B</h2>
     {{ countOfB }}
     <h2>moduleA count + rootState count</h2>
     {{ aWithRoot }}
     <h2>moduleB count + rootState count</h2>
     {{ bWithRoot }}
     <h2>a + b + rootState</h2>
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
