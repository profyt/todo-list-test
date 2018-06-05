<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <ToDoItem
        v-for="item in items"
        :item="item"
        :key="item.id">
      </ToDoItem>
      <AddToDoItem :items="items"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ToDoItem from '@/components/ToDoItem.vue'
import AddToDoItem from '@/components/AddToDoItem.vue'

export default Vue.extend({
  name: 'ToDoList',
  props: ['msg', 'items'],
  components: {ToDoItem, AddToDoItem},
  methods: {
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
