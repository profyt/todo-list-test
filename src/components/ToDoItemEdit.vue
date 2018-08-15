<template>
  <div class="row item-row">
    <div class="input-group item-row__wrap">
      <textarea class="form-control item-row__input" aria-label="With textarea" v-model="innerItem.text"></textarea>
      <input type="number" class="form-control item-row__input" aria-label="With textarea" v-model="innerItem.time">
      <div class="input-group-append item-row__button-group">
        <button class="btn btn-outline-secondary item-row__button_no-complete" type="button" @click="toDoItemSave">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ToDoItem',
  props: ['item'],
  created () {
    this.innerItem = this.item
  },
  data () {
    return {
      innerItem: {
        id: null,
        text: '',
        time: 0
      }
    }
  },
  methods: {
    toDoItemSave () {
      this.$emit('saveitem', this.innerItem)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item-row{
  $green-color:rgb(107, 156, 66);
  &__alert{
      margin:0;
      flex:1 1 auto;
      text-align: left;
    }
  &__button{
    transition: all .3s;
    border: 1px solid #ced4da;
    box-shadow: 0px -8px 20px -5px rgba(0, 0, 0, 0.3) inset;
    &_complete{
      @extend .item-row__button;
      &:hover,&:focus{
        color: black;
        background: white;
        border-color: $green-color;
        box-shadow: 0px 0px 20px 3px $green-color inset;
      }
    }
    &_no-complete{
      @extend .item-row__button;
      &:hover,&:focus{
        color: black;
        background: white;
        border-color: gray;
        box-shadow: 0px 0px 20px 3px gray inset;
      }
    }
    &_delete{
      @extend .item-row__button;
      &:hover{
        @extend .item-row__button;
        color: black;
        background: white;
        border-color: red;
        box-shadow: 0px 0px 20px 3px red inset;
      }
    }
  }
  &__input{
    box-shadow: 0px -8px 20px -5px rgba(0, 0, 0, 0.3) inset;
    padding: 15px 15px 0px;
    transition: all .5s;
    &:focus{
      box-shadow: 0px -8px 20px -5px $green-color inset;
      border-color: $green-color;
    }
  }
}

.input-group{
  margin-bottom: 10px;
}
</style>
