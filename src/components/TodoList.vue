<template>
  <div class = "list">
      <li class="list__item" v-for="(todoItem,index) in propsdata" v-bind:key="todoItem.item">
          <input 
          type ="checkbox" 
          class="list__checked"
          v-bind:id = "todoItem.item"
          v-bind:checked="todoItem.completed === true"
          v-on:change="toggleComplete(todoItem)"
          />
          <label v-bind:for="todoItem.item" class="list__label">
            <p class = "list__text">{{todoItem.item}}</p>
          </label>
          <p class = "list__date">{{todoItem.date}}</p>

          <button class ="list__delete" v-on:click = "removeTodo(todoItem, index)">
              <div class="blind">Del</div>
            </button>
      </li>
  </div>
</template>

<script>
export default {
    props: ["propsdata"],
    methods:{
        toggleComplete(todoItem) {
            todoItem.completed = !todoItem.completed;
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
        removeTodo(todoItem, index){
            localStorage.removeItem(todoItem.item);
            this.todoItems.splice(index,1);
        }
    }
}

</script>

<style>
    
</style>