<template>
  <div class="add">
    <input type="text" 
    class="add__input" 
    placeholder="오늘의 할일은 무엇인가요?" 
    v-model="newTodoItem"
    v-on:keyup.enter="addTodoItem" />
    <button class="add__button" v-on:click="addTodoItem">
      <span class="blind">+</span></button>
  </div>
</template>

<script>

export default{
  data(){
    return {
      newTodoItem: ""
    };
  },
  methods: {
    addTodoItem(){
      if(this.newTodoItem !== ""){
        this.$emit("addItem",this.newTodoItem);
        this.clearInput();
      }
    },
    clearInput(){
      var el = document.getElementsByClassName('add_input');
      for (var i = 0 ; i < el.length; i++)
        el(i).value= '';
    }
  }  
}

</script>
