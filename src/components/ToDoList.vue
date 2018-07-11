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
  props: ['msg', 'newitems'],
  components: {ToDoItem, AddToDoItem, ToDoListStat},
  data () {
    return {
      NewToDo: '',
      newitems: []
    }
  },
  computed:{
    newitems(): object {
      return this.$store.state.items;
    }
  },
  methods: {
    ToDoListAddItem: function (NewToDo: any) {
      this.$store.commit('ToDoListAddItem', NewToDo)
    },
    ToDoListDeleteItem: function (DeleteItem: any) {
      this.$store.commit('ToDoListDeleteItem', DeleteItem)
    },
    ToDoItemComplete: function (CompleteItem: any) {
      this.$store.commit('ToDoItemComplete', CompleteItem)
    },
    ToDoItemNotComplete: function (CompleteItem: any) {
      this.$store.commit('ToDoItemNotComplete', CompleteItem)
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
