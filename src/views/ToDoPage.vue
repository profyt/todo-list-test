<template>
  <div class="todo-page">
    <ToDoList :msg="msg" :newitems="newitems"/>
    <ToDoListStat  :newitems="newitems"></ToDoListStat>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ToDoList from '@/components/ToDoList.vue'
import ToDoListStat from '@/components/ToDoListStat.vue'

export default Vue.extend({
  name: 'ToDoPage',
  components: {ToDoList,ToDoListStat},
  computed: {
    newitems (): object {
      return this.$store.state.items
    }
  },
  data () {
    return {
      msg: 'Привет!'
    }
  },
  methods: {
  }
})
</script>
