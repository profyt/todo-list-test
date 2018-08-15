<template>
  <div id="app">
    <Navigation/>
    <img src="./assets/logo.png">
    <transition name="component-fade" mode="out-in">
    <router-view/>
    </transition>
    <popup/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ToDoPage from '@/views/ToDoPage.vue'
import Navigation from '@/components/Navigation.vue'
import popup from '@/components/popup.vue'

export default Vue.extend({
  name: 'app',
  components: {ToDoPage, Navigation, popup},
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
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease,transform .3s ease;

}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(-50%);
  opacity: 0;
}
</style>
