<template>
  <ToDoList :msg="msg" :items="items"/>
</template>

<script lang="ts">
import Vue from 'vue'
import ToDoList from '@/components/ToDoList.vue'

export default Vue.extend({
  name: 'ToDoPage',
  components: {ToDoList},
  data () {
    return {
      msg: 'Привет!'
    }
  },
  methods: {
  }
})
</script>
