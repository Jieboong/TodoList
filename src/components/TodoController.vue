<template>
  <div class="input">
      <div class="select">
          <label for ="order"></label>
          <select name = "order" id = "order" class = "selectbox" v-model="selected" v-on:change="sortTodo">
            <option value="date-asc">Oldest</option>
            <option value="date-desc">Latest</option>
            <option value="name-asc">AtoZ</option>
            </select> 
      </div>
  <button class = "clear" v-on:click="clearTodo">clear all</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "date-asc"
    }
  },
  methods: {
    clearTodo(){ 
      this.$emit("clearAll");
    },
    sortTodo() {
      this.$emit("sortItem",{value:this.selected});
    }
  }

}
</script>

<style>

</style>