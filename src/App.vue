<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <loader></loader>
  </div>
</template>

<script>
import Loader from '@/components/Loader'

export default {
  name: 'app',
  components: {
    Loader
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
