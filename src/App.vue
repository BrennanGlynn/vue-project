<template>
  <div id="app">
    <router-link to="/"><img src="./assets/logo.png"></router-link>
    <br>
    <button @click="goTo('new')">Go to new component</button>
    <button @click="goTo('two')">Go to two component</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    describe: function () {
      console.log(this.value)
    },
    goTo: function (route) {
      this.$router.push({ path: route })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
