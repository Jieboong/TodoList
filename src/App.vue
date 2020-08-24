<template>
  <div id="app"><div id = "top">
      <TodoHeader />
      <TodoTitle />
      <TodoInput v-on:addItem="addOneItem"/>
    </div><div id = "bottom">
      <TodoController />
      <TodoList v-bind:propsdata="todoItems"/>
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
      todoItems: []
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
  },
  methods: {
    addOneItem(todoItem) {
      var value = {
          item : todoItem,
          date : getDate().date,
          time: getDate().time,
          complete:false
        };

      localStorage.setItem(todoItem, JSON.stringify(value));
      this.todoItems.push(value);
    }
  }

}
</script>
<style lang ='scss'>

</style>
