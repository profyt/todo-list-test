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
        { id: 0, text: 'Овощи', stat: true },
        { id: 1, text: 'Сыр', stat: true },
        { id: 2, text: 'Что там ещё люди едят?', stat: false }
      ]
  },
  mutations: {
    ToDoListAddItem: function (state, NewToDo: any) {
      state.items.push({
        id: Lodash.size(state.items),
        text: NewToDo.text,
        stat: NewToDo.stat
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
    }


  }
})