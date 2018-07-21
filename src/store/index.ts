import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import Lodash from 'lodash'


Vue.use(Vuex);
Vue.config.productionTip = false
export default new Vuex.Store({
  state: {
    msg: 'Привет!',
      items: [
        { id: 0, text: 'Овощи', stat: true ,time: 10},
        { id: 1, text: 'Сыр', stat: true ,time: 15},
        { id: 2, text: 'Что там ещё люди едят?', stat: false ,time: 20}
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
      }
    }


  }
})