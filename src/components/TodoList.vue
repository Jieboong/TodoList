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
              <div class="blind">×</div>
            </button>
      </li>
  </div>
</template>

<script>
export default {
    props: ["propsdata"],
    data(){
        return{
            todoItems: []
        }
    },
    methods:{
        toggleComplete(todoItem) {
            this.$emit("toggleItem",todoItem);
        },
        removeTodo(todoItem, index){
            this.$emit("removeItem",todoItem,index);
        }
    }
}

</script>

<style>
    
</style>