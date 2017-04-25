<template>
  <div class="counter">
    <h1>{{ msg }}</h1>
    <h1>{{ count }}</h1>
    <button @click="increment">Add</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
