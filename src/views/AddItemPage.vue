<template>
  <div class="hello">
    <h1>Добавление Элемента</h1>
    <div class="container" v-if="TaskId==undefined">
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
import {eventBus} from '@/main'

export default Vue.extend({
  name: 'AddItemPage',
  props: {
    TaskId:{
      type: Number,
      default: null
    }
  },
  components: {AddToDoItem,ToDoItemEdit},
  computed: {
    item () {
      let find:any = this.$store.state.items.find((item: any) => item.id === this.TaskId);
      return find !== undefined ? Object.assign({}, find) : find;
    }
  },
  methods: {
    ToDoListAddItem (NewToDo: any) {
      
      if (((!NewToDo.text) && (NewToDo.time ===0)) || ((!NewToDo.text) || (NewToDo.time ===0))) {
        return eventBus.$emit('popupOpen',{
          typeMessage: {
            type: Text,
            value: 'alert'
          },
          message:{
            type: Text,
            value: 'Заполните все поля!'
          }
        })
        
      }
      this.$store.commit('ToDoListAddItem', NewToDo)
    },
    SaveItem (SaveItem: any) {
      if (((!SaveItem.text) && (SaveItem.time === 0)) || ((!SaveItem.text) || (SaveItem.time === 0))) {
        return eventBus.$emit('popupOpen', {
          typeMessage: {
            type: Text,
            value: 'alert'
          },
          message: {
            type: Text,
            value: 'Заполните все поля!'
          }
        })
      }
      this.$store.commit('ToDoItemSave', SaveItem)
    }
  }
})
</script>
