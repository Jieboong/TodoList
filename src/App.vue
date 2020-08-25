<template>
  <div id="app"><div id = "top">
      <TodoHeader />
      <TodoTitle v-bind:propsdata ="leftCount"/>
      <TodoInput v-on:addItem="addOneItem"/>
    </div><div id = "bottom">
      <TodoController v-on:clearAll ="clearAllItems"/>
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
    if (localStorage.lenght > 0) {
      for(let i = 0 ; i <localStorage.length; i++) {
        if(localStorage.key(i) !== "loglevel:webpack-dev-server"){
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
    let leftCount=0;
    for (let i = 0; i< this.todoItems.length; i++) {
      if (this.todoItems[i].completed=== false) {
        leftCount++;
      }
    }
    return leftCount;
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
      todoItem.completed = !todoItem.completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      this.leftCount--;
    },
    clearAllItems(){
      this.todoItems = [];
      localStorage.clear();
      this.leftCount = 0;
    }
  }

}
</script>
<style lang ='scss'>

</style>
