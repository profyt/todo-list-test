<template>
  <div class="row item-row" :class="itemRowClass">
    <div class="input-group item-row__wrap" v-if="!item.stat">
      <div class="alert alert-info item-row__alert" role="alert">
        {{item.text}}<span class="item_text-time">{{item.time}}</span>
      </div>
      <div class="input-group-append item-row__button-group">
        <router-link class="btn btn-outline-secondary item-row__button_no-complete" :to="{ name: 'edit', params: { TaskId: item.id }}">Редактировать</router-link>
        <button class="btn btn-outline-secondary item-row__button_no-complete" type="button" @click="ToDoItem_complete">Готово</button>
        <button class="btn btn-outline-secondary item-row__button_delete" type="button" @click="ToDoItem_delete">Удалить задачу</button>
      </div>
    </div>
    <div  class="input-group item-row__wrap"  v-if="item.stat">
      <div class="alert alert-success item-row__alert" role="alert">
        {{item.text}}<span class="item_text-time">{{item.time}}</span>/<span class="item_text-time-result" :class="completeTimeClass">{{item.resultTime}}</span>
      </div>
      <div class="input-group-append item-row__button-group">
        <button class="btn btn-outline-secondary item-row__button_no-complete" type="button" @click="ToDoItem_not_complete">Не готово</button>
        <button class="btn btn-outline-secondary item-row__button_delete" type="button" @click="ToDoItem_delete">Удалить задачу</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ToDoItem',
  props: ['item'],
  computed:{
    itemRowClass (){
      if(!this.item.stat){
        return 'drag-item'
      }
    },
    completeTimeClass (){
      if (this.item.resultTime <= 0){
        return 'item_text-time-result--in-time'
      }
      else{
        return 'item_text-time-result--over-time'
      }
    }
  },
  methods: {
    ToDoItem_complete: function () {
      this.$emit('itemcomplete', {id: this.item.id, stat: true})
    },
    ToDoItem_not_complete: function () {
      this.$emit('item-not-complete', {id: this.item.id, stat: false})
    },
    ToDoItem_delete: function () {
      this.$emit('item-delete', {id: this.item.id})
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
.item{
  &_text-time{
    font-weight: bold;
    margin-left: 15px;
    &-result{
      margin-left: 5px;
      font-weight: bold;
      &--in-time{
        color: #44b35d;
      }
      &--over-time{
        color: red;
      }
    }
  }
}
.input-group{
  margin-bottom: 10px;
}
</style>
