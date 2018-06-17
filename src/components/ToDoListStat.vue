<template>
  <div class="row ToDoStat">
    <span class="ToDoStat_Item badge badge-primary">Всего задач <span class="badge badge-pill badge-light">{{SumOfItems}}</span></span>
    <span class="ToDoStat_Item badge badge-secondary">Добавлено новых задач <span class="badge badge-pill badge-light">{{AddItems}}</span></span>
    <span class="ToDoStat_Item badge badge-success">Выполненных задач <span class="badge badge-pill badge-light">{{CompleteItems}}</span></span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Lodash from 'lodash'

export default Vue.extend({
  name: 'ToDoListStat',
  props: ['items', 'newitems'],

  computed: {
    SumOfItems: function () {
      return Lodash.size(this.newitems)
    },
    AddItems: function () {
      return Lodash.size(this.newitems)-Lodash.size(this.items)
    },
    CompleteItems: function () {
      return Lodash.size(Lodash.filter(this.newitems, ['stat', true]))
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ToDoStat{
  &_Item{
    &:not(:last-child){
      margin-right: 10px;
    }
  }
}
</style>
