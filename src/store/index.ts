import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import Lodash from 'lodash'
import {eventBus} from '@/main'
import moment, { Moment } from 'moment'

Vue.use(Vuex);
Vue.config.productionTip = false
export default new Vuex.Store({
  state: {
    msg: 'Привет!',
      items: [
        { id: 0, text: 'Овощи', stat: true ,time: 10},
        { id: 1, text: 'Сыр', stat: true ,time: 15},
        { id: 2, text: 'Что там ещё люди едят?', stat: false ,time: 20},
        { id: 3, text: 'Тащи меня полностью', stat: false ,time: 20}
      ]
  },
  mutations: {
    ToDoListAddItem: function (state, NewToDo: any) {
      state.items.push({
        id: Lodash.size(state.items),
        text: NewToDo.text,
        stat: NewToDo.stat,
        time: NewToDo.time
      })
      eventBus.$emit('popupOpen',{
        typeMessage: {
          type: Text,
          value: 'complete'
        },
        message:{
          type: Text,
          value: 'Добавлено!'
        }
      })
    },
    ToDoListDeleteItem: function (state, DeleteItem: any) {
      state.items = Lodash.filter(state.items, function(o) { return o.id != DeleteItem.id; })
    },
    ToDoItemComplete: function (state, CompleteItem: any) {
      state.items[CompleteItem.id].stat = CompleteItem.stat
    },
    ToDoItemNotComplete: function (state, CompleteItem: any) {
      state.items[CompleteItem.id].stat = CompleteItem.stat
    },
    ToDoItemSave(state, updatedItem: any){
      const index = state.items.findIndex(item => item.id === updatedItem.id)
      if (index !== -1){
        state.items.splice(index, 1, updatedItem)
        let summTime:Number,
        startDay:Moment
        state.items.forEach((item)=>summTime = +item.time)
        
        startDay = moment()
        
      }
      eventBus.$emit('popupOpen',{
        typeMessage: {
          type: Text,
          value: 'complete'
        },
        message:{
          type: Text,
          value: 'Сохранено!'
        }
      })
    },
    sortItem(state, {oldIndex,newIndex} ){
      let notCompleteItem = state.items.filter(item => !item.stat)
      const completeItem = state.items.filter(item => item.stat)
      if(oldIndex > newIndex){
        notCompleteItem.splice(newIndex,0, notCompleteItem[oldIndex])
        notCompleteItem.splice(oldIndex+1, 1)
        state.items = completeItem.concat(notCompleteItem)
      }
      else {
        notCompleteItem.splice(newIndex,0, notCompleteItem[oldIndex])
        notCompleteItem.splice(oldIndex, 1)
        state.items = completeItem.concat(notCompleteItem)
      }
    }


  }
})