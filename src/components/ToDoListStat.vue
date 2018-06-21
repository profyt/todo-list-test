<template>
  <div class="row to-do-stat">
    <span class="to-do-stat__item badge badge-primary">Всего задач <span class="to-do-stat__item-badge badge badge-pill badge-light">{{SumOfItems}}</span></span>
    <span class="to-do-stat__item badge badge-secondary">Не выполненных задач <span class="badge badge-pill badge-light">{{InCompleteItems}}</span></span>
    <span class="to-do-stat__item badge badge-success">Выполненных задач <span class="badge badge-pill badge-light">{{CompleteItems}}</span></span>
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
    InCompleteItems: function () {
      return Lodash.size(Lodash.filter(this.newitems, ['stat', false]))
    },
    CompleteItems: function () {
      return Lodash.size(Lodash.filter(this.newitems, ['stat', true]))
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.to-do-stat{
  &__item{
    font-size: 1em;
    font-weight: normal;
    &:not(:last-child){
      margin-right: 10px;
    }
    &-badge{
      margin-left: 5px;
      font-weight: bold;
    }
  }
}
</style>
