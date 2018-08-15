<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <draggable :options="{draggable:'.drag-item'}" @end="updatePosition">
        <ToDoItem
          v-for="item in newitems"
          :item="item"
          :key="item.id"
          @itemcomplete="ToDoItemStat"
          @item-not-complete="ToDoItemStat"
          @item-delete="ToDoListDeleteItem">
        </ToDoItem>
      </draggable>
    <!--<AddToDoItem @additem="ToDoListAddItem"></AddToDoItem>-->
      
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ToDoItem from '@/components/ToDoItem.vue'
import AddToDoItem from '@/components/AddToDoItem.vue'

const draggable = require('vuedraggable')
import {eventBus} from '@/main'

export default Vue.extend({
  name: 'ToDoList',
  props: ['msg','newitems'],
  components: {ToDoItem, AddToDoItem, draggable},
  data () {
    return {
      NewToDo: ''
    }
  },
  methods: {
    ToDoListDeleteItem: function (DeleteItem: any) {
      this.$store.commit('ToDoListDeleteItem', DeleteItem)
    },
    ToDoItemStat: function (CompleteItem: any) {
      this.$store.commit('ToDoItemStat', CompleteItem)
    },
    updatePosition (event:any){
      this.$store.commit('sortItem', { oldIndex: event.oldIndex, newIndex: event.newIndex})
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
