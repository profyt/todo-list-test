<template>
  <div class="hello">
    <h1>Добавление Элемента</h1>
    <div class="container">
      <AddToDoItem @additem="ToDoListAddItem"></AddToDoItem>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AddToDoItem from '@/components/AddToDoItem.vue'

export default Vue.extend({
  name: 'AddItemPage',
  components: {AddToDoItem},
  data () {
    return {
      msg: 'Привет!'
    }
  },
  methods: {
    ToDoListAddItem: function (NewToDo: any) {
      this.$store.commit('ToDoListAddItem', NewToDo)
    }
  }
})
</script>
