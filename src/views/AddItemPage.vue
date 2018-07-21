<template>
  <div class="hello">
    <h1>Добавление Элемента</h1>
    {{ TaskId }}
    <div class="container" v-if="TaskId === 'new'">
      <AddToDoItem @additem="ToDoListAddItem" ></AddToDoItem>
    </div>
    <div class="container" v-else>
      <ToDoItemEdit
        :item="item"
        @saveitem="SaveItem">
      </ToDoItemEdit>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AddToDoItem from '@/components/AddToDoItem.vue'
import ToDoItemEdit from '@/components/ToDoItemEdit.vue'
import Lodash from 'lodash'

export default Vue.extend({
  name: 'AddItemPage',
  props: {
    TaskId:{
      type: [Number, String],
      default: 'new'
    }
  },
  components: {AddToDoItem,ToDoItemEdit},
  computed: {
    item () {
      let find = this.$store.state.items.find(item => item.id === this.TaskId);
      return find !== undefined ? Object.assign({}, find) : find;
    }
  },
  methods: {
    ToDoListAddItem: function (NewToDo: any) {
      this.$store.commit('ToDoListAddItem', NewToDo)
    },
    SaveItem: function (SaveItem: any) {
      this.$store.commit('ToDoItemSave', SaveItem)
    }
  }
})
</script>
