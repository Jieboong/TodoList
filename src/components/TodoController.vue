<template>
  <div class="input">
      <div class="select">
          <label for ="order"></label>
          <select name = "order" id = "order" class = "selectbos">
            <option value="date-asc">날짜 오름차순</option>
            <option value="date-desc">날짜 내림차순</option>
            <option value="name-asc">제목 오름차순</option>
            <option value="date-desc">제목 내림차순</option>
            </select> 
      </div>
  <button class = "clear" v-on:click="clearTodo">clear all</button>
  </div>
  
</template>

<script>
export default {
  methods: {
    clearTodo(){ 
      localStorage.clear();
    }
  }

}
</script>

<style>

</style>