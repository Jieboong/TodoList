<template>
  <div class="input">
      <div class="select">
          <label for ="order">Order</label>
          <select name = "order" id = "order" class = "selectbos">
            <option value="date-asc">date ascending</option>
            <option value="date-desc">date descending</option>
            <option value="name-asc">name ascending</option>
            <option value="date-desc">name descending</option>
            </select> 
      </div>
  <button class = "clear">clear all</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .input{
    text-align: center;
  }
</style>