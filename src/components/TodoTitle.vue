<template>
  <div class = "title">
      <p class ="title__message">{{'Hello  '+userName}} <br><br>{{message}}</p>"
      <p class = "title__task">
          <span class="title__task-total">{{propsCount}}</span>
          things to do TODAY
      </p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Work Hard!",
            userName : this.propsName
        }
    },
    props: ["propsCount","propsName"],
}
</script>