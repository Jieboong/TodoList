<template>
  <div id="app"><div id = "top">
      <TodoHeader />
      <TodoTitle v-bind:propsdata ="leftCount"/>
      <TodoInput v-on:addItem="addOneItem"/>
    </div><div id = "bottom">
      <TodoController v-on:clearAll ="clearAllItems"
                      v-on:sortItem="sortAllItem"/>
      <TodoList v-bind:propsdata="todoItems"
                v-on:removeItem="removeOneItem"
                v-on:toggleItem="toggleOneItem"
      />
      <TodoFooter />
    </div></div>
</template>

<script>

import TodoHeader from "./components/TodoHeader";
import TodoController from "./components/TodoController";
import TodoFooter from "./components/TodoFooter";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoTitle from "./components/TodoTitle";
import getDate from './assets/getDate.js';

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList,
    TodoFooter
  },
  data() { 
    return {
      todoItems: [],
      leftCount:0
    }
  }, 
  created() {
    if (localStorage.length > 0) {
      for(let i = 0 ; i <localStorage.length; i++) {
        if(localStorage.key(i) !== "loglevel:webpack-dev-server"){
          let getitem = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.todoItems.push(
            getitem
          );
          console.log(getitem.item);
          if (getitem.completed === false){
              this.leftCount++;
            }
        }
      }
    }
    
  },
  methods: {
    addOneItem(todoItem) {
      var value = {
          item : todoItem,
          date : getDate().date,
          time: getDate().time,
          completed:false
        };

      localStorage.setItem(todoItem, JSON.stringify(value));
      this.todoItems.push(value);
      this.leftCount++;
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem,index);
      this.todoItems.splice(index,1);
      this.leftCount--;
    },
    toggleOneItem(todoItem) {
      if (todoItem.completed === true) {
        this.leftCount++;
      } else{
        this.leftCount--;
      }
      todoItem.completed = !todoItem.completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(){
      this.todoItems = [];
      localStorage.clear();
      this.leftCount = 0;
    },
    sortTodoLatest(){
      this.todoItems.sort(function(a,b) {
        return a.time-b.time;
      });
    },
    sortTodoOldest() {
      this.todoItems.sort(function(a,b) {
        return b.time-a.time;
      });
    },
    sortTodAtoZ() {
      this.todoItems.sort(function(a,b) {
        return a.item-b.item;
      })
    },
    sortAllItem(selectedSort){
      if (selectedSort.value === "date-asc") {
        this.sortTodoLatest();
      }
      if (selectedSort.value === "date-desc"){
        this.sortTodoOldest();
      }
      if (selectedSort.valu === "name-asc") {
        this.sortTodoAtoZ();
      }
    }
  },
  mounted(){
    this.sortTodoOldest();
  }

}
</script>
<style lang ='scss'>

</style>
