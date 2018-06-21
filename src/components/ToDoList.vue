<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <ToDoItem
        v-for="item in newitems"
        :item="item"
        :key="item.id"
        @itemcomplete="ToDoItemComplete"
        @item-not-complete="ToDoItemNotComplete"
        @item-delete="ToDoListDeleteItem">
      </ToDoItem>
      <AddToDoItem @additem="ToDoListAddItem"></AddToDoItem>
      <ToDoListStat :items="this.items" :newitems="this.newitems"></ToDoListStat>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Lodash from 'lodash'
import ToDoItem from '@/components/ToDoItem.vue'
import AddToDoItem from '@/components/AddToDoItem.vue'
import ToDoListStat from '@/components/ToDoListStat.vue'

export default Vue.extend({
  name: 'ToDoList',
  props: ['msg', 'items'],
  components: {ToDoItem, AddToDoItem, ToDoListStat},
  data () {
    return {
      NewToDo: '',
      newitems: []
    }
  },
  watch: {
    items (newVal, oldVal) {
      this.newitems = Lodash.cloneDeep(this.items)
    }
  },
  mounted: function () {
    this.newitems = Lodash.cloneDeep(this.items)
  },
  methods: {
    ToDoListAddItem: function (NewToDo: any) {
      this.newitems.push({
        id: Lodash.size(this.newitems),
        text: NewToDo.text,
        stat: NewToDo.stat
      })
    },
    ToDoListDeleteItem: function (DeleteItem: any) {
      this.newitems = Lodash.filter(this.newitems, function(o) { return o.id != DeleteItem.id; })
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
