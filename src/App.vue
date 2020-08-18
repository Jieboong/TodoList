<template>
  <div id="app">
  <TodoHeader />
  <TodoTitle />
  <TodoInput />
  <TodoController />
  <TodoList />
  <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoController from "./components/TodoController";
import TodoFooter from "./components/TodoFooter";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoTitle from "./components/TodoTitle";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList,
    TodoFooter
  }
}
</script>

<style lang="scss">

$color:#f0f0f0;
.list{
  background: $color;

  &__text{
    font-weight: bold;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
