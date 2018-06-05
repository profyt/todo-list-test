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
      msg: 'Привет!',
      items: [
        { id: 0, text: 'Овощи', stat: true },
        { id: 1, text: 'Сыр', stat: true },
        { id: 2, text: 'Что там ещё люди едят?', stat: false }
      ]
    }
  },
  methods: {
  }
})
</script>
