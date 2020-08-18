<template>
  <div class = "title">
      <p class ="title__message">{{message}}</p>
      <p class = "title__task">
          <span class="today_total">{{todaytotal}}</span>
          things to do TODAY
      </p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Work Hard!",
            todaytotal : 5
        }
    }
}
</script>

<style>

</style>