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
        { id: 0, text: 'Овощи', stat: false ,time: 10, completeTime:'', resultTime: 0},
        { id: 1, text: 'Сыр', stat: false ,time: 15, completeTime:'', resultTime: 0},
        { id: 2, text: 'Что там ещё люди едят?', stat: false ,time: 20, completeTime:'', resultTime: 0},
        { id: 3, text: 'Тащи меня полностью', stat: false ,time: 20, completeTime:'', resultTime: 0}
      ]
  },
  mutations: {
    ToDoListAddItem: function (state, NewToDo: any) {
      let summTime:number = 0,
        startDay:Moment = moment().set({'hour': 10, 'minute': 0, 'second': 0}),
        endDay: Moment = moment().set({'hour': 18, 'minute': 0, 'second': 0})
        state.items.forEach((item:any)=> {summTime += Number(item.time)})
        summTime += Number(NewToDo.time)
        startDay.add( summTime , 'minutes')
        if (startDay.isBefore(endDay)){
          state.items.push({
            id: Lodash.size(state.items),
            text: NewToDo.text,
            stat: NewToDo.stat,
            time: NewToDo.time,
            completeTime: '',
            resultTime: 0
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
        }
        else{
          eventBus.$emit('popupOpen',{
            typeMessage: {
              type: Text,
              value: ''
            },
            message:{
              type: Text,
              value: 'Задач и так полно!'
            }
          })
        }
      
      
    },
    ToDoListDeleteItem: function (state, DeleteItem: any) {
      state.items = Lodash.filter(state.items, function(o) { return o.id != DeleteItem.id; })
    },
    ToDoItemStat: function (state, CompleteItem: any) {
      let date:Moment = moment(),
        startDay:Moment = moment().set({'hour': 10, 'minute': 0, 'second': 0})
      

      const index = state.items.findIndex(item => item.id === CompleteItem.id)
      state.items[index].stat = CompleteItem.stat
      state.items[index].completeTime = date.toLocaleString()
      let summTime:number = 0,
          isCompleteItem = state.items.filter(item => item.stat),
          notCompleteItem= state.items.filter(item => !item.stat)
      isCompleteItem.forEach((item:any)=> {summTime += Number(item.time)})
      if (CompleteItem.stat){
        if((isCompleteItem.length-1 !==0)&&(isCompleteItem.length !== 1)){
          //требуется для рассчета времени потраченного на задачу
          //let lastTaskCompleteTime = moment(isCompleteItem[isCompleteItem.length-2].completeTime)
          let timeDiff = date.diff(startDay,'minutes') - summTime
          state.items[index].resultTime = timeDiff
          state.items = isCompleteItem.concat(notCompleteItem)
        }
        else{
          let tmp = date.diff(startDay,'minutes') - summTime
          state.items[index].resultTime = Number(tmp)
          state.items = isCompleteItem.concat(notCompleteItem)
        }
      }
      let resultTime:Moment = moment().set({'hour': 0, 'minute': 0, 'second': 0}),
          message:string
      resultTime.add(Math.abs(state.items[index].resultTime), 'minute')
      if (state.items[index].resultTime<0){
        message = 'Так держать, вы опережаете график на: '+ resultTime.hour() + ' : ' + resultTime.minute()
      }
      else{
        message = 'Поднажмите, вы отстаете от графика на: '+ resultTime.hour() + ' : ' + resultTime.minute()
      }
      eventBus.$emit('popupOpen',{
        typeMessage: {
          type: Text,
          value: ''
        },
        message:{
          type: Text,
          value: message
        }
      })
    },
    ToDoItemSave(state, updatedItem: any){
      const index = state.items.findIndex(item => item.id === updatedItem.id)
      if (index !== -1){
        let summTime:number = 0,
        startDay:Moment = moment().set({'hour': 10, 'minute': 0, 'second': 0}),
        endDay: Moment = moment().set({'hour': 18, 'minute': 0, 'second': 0})
        state.items.forEach((item:any)=> {item.id === updatedItem.id?summTime += Number(updatedItem.time):summTime += Number(item.time)})
        startDay.add( summTime , 'minutes')
        if (startDay.isBefore(endDay)){
          state.items.splice(index, 1, updatedItem)
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
        }
        else{
          eventBus.$emit('popupOpen',{
            typeMessage: {
              type: Text,
              value: ''
            },
            message:{
              type: Text,
              value: 'Задач слишком много для одного дня!'
            }
          })
        }
      }
      
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