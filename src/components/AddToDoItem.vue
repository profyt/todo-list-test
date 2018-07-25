<template>
  <div class="row">
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <button class="btn btn-outline-secondary" type="button" @click="ToDoList_AddItem">Добавить</button>
        </div>
        <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" v-model="AddItemText">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AddTodoItem',
  props: [],
  data () {
    return {
      AddItemText: ''
    }
  },
  methods: {
    ToDoList_AddItem: function () {
      var value = this.AddItemText && this.AddItemText.trim()
      this.$emit('additem', {text: value, stat: false})
      this.AddItemText = ''
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
