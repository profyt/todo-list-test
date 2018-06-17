<template>
  <div class="row">
    <div class="input-group" v-if="!item.stat">
      <textarea class="form-control" aria-label="With textarea" v-model="item.text"></textarea>
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" @click="ToDoItem_complete">Готово</button>
        <button class="btn btn-outline-secondary" type="button" @click="ToDoItem_delete">Удалить задачу</button>
      </div>
    </div>
    <div  class="input-group"  v-if="item.stat">
      <div class="alert alert-success" role="alert">
        {{item.text}}
      </div>
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" @click="ToDoItem_not_complete">Не готово</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ToDoItem',
  props: ['item'],
  methods: {
    ToDoItem_complete: function () {
      this.$emit('itemcomplete', {id: this.item.id, stat: true})
    },
    ToDoItem_not_complete: function () {
      this.$emit('item-not-complete', {id: this.item.id, stat: false})
    },
    ToDoItem_delete: function () {
      // this.item = null
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.alert{
  margin: 0;
  flex: 1 1 auto;
  text-align: left;
}
.input-group{
  margin-bottom: 10px;
}
</style>
