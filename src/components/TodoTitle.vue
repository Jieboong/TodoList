<template>
  <div class = "title">
      <p class ="title__message">{{message}}</p>
      <p class = "title__task">
          <span class="title__task-total">{{taskTotal}}</span>
          things to do TODAY
      </p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Work Hard!",
            taskTotal : 5
        }
    }
}
</script>

<style>
    .title__message{
        text-align : center;
    }
    .title__task{
        text-align :center;

    }
</style>