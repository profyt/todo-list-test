<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <ToDoItem
        v-for="item in newitems"
        :item="item"
        :key="item.id"
        @itemcomplete="ToDoItemComplete"
        @item-not-complete="ToDoItemNotComplete">
      </ToDoItem>
      <AddToDoItem @additem="ToDoListAddItem"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ToDoItem from '@/components/ToDoItem.vue'
import AddToDoItem from '@/components/AddToDoItem.vue'
import { isArray } from 'util';

export default Vue.extend({
  name: 'ToDoList',
  props: ['msg', 'items'],
  components: {ToDoItem, AddToDoItem},
  data () {
    return {
      NewToDo: '',
      newitems: JSON.parse(JSON.stringify(this.items))
    }
  },
  watch: {
  
  },
  methods: {
    ToDoListAddItem: function (NewToDo: any) {
      this.newitems.push({
        text: NewToDo.text,
        stat: NewToDo.stat
      })
    },
    ToDoItemComplete: function (CompleteItem: any) {
      this.newitems[CompleteItem.id].stat = CompleteItem.stat
    },
    ToDoItemNotComplete: function (CompleteItem: any) {
      this.newitems[CompleteItem.id].stat = CompleteItem.stat
    }
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
