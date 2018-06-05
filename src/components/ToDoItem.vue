<template>
  <div class="row">
    <div class="input-group" v-if="!item.stat">
      <div class="input-group-prepend">
        <button class="btn btn-outline-secondary" type="button" @click="ToDoItem_complete">Готово</button>
      </div>
      <textarea class="form-control" aria-label="With textarea" v-model="item.text"></textarea>
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" @click="ToDoItem_delete">Удалить задачу</button>
      </div>
    </div>
    <div class="alert alert-success" role="alert" v-if="item.stat">
      {{item.text}}
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
      this.item.stat = true
    },
    ToDoItem_delete: function () {
      // this.item = null
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
