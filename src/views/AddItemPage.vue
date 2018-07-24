<template>
  <div class="hello">
    <h1>Добавление Элемента</h1>
    {{newTask}}
    <div class="container" v-if="newTask === true">
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
import eventBus from '@/main'

export default Vue.extend({
  name: 'AddItemPage',
  props: {
    TaskId:{
      type: Number,
      default: 'new'
    },
    newTask:{
      type: Boolean,
      default:false
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
      var value = NewToDo.text && NewToDo.text.trim()
      if (!value) {
        eventBus.$emit('popupOpen',{
          typeMessage: {
            type: Text,
            value: 'alert'
          },
          message:{
            type: Text,
            value: 'Задача не может быть пустой!'
          }
        })
        return
      }
      else{
        this.$store.commit('ToDoListAddItem', NewToDo)
      }
      
    },
    SaveItem: function (SaveItem: any) {
      var value = SaveItem.text && SaveItem.text.trim()
      if (!value) {
        eventBus.$emit('popupOpen',{
          typeMessage: {
            type: Text,
            value: 'alert'
          },
          message:{
            type: Text,
            value: 'Задача не может быть пустой!'
          }
        })
        return
      }
      else{
        this.$store.commit('ToDoItemSave', SaveItem)
      }
      
    }
  }
})
</script>
