<template>
  <div id="app">
    <router-link to="/"><img src="./assets/logo.png"></router-link>
    <br>
    <button @click="goToNew">Go to new component</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    goToNew: function () {
      this.$router.push({ path: 'new' })
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
