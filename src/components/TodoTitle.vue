<template>
  <div class = "title">
      <p class ="title__message">{{message}}</p>
      <p class = "title__task">
          <span class="title__task-total">{{propsdata}}</span>
          things to do TODAY
      </p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Work Hard!",
        }
    },
    props: ["propsdata"],
}
</script>