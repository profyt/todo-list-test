<template>
  <div id="app">
    <Navigation/>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ToDoPage from '@/views/ToDoPage.vue'
import Navigation from '@/components/Navigation.vue'
export default Vue.extend({
  name: 'app',
  components: {ToDoPage,Navigation},
  methods: {
  }
})
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
