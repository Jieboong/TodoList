<template>
<div class = "hello">
    <div class="hello__question"> What is your name?</div>
    <label for ="user_name" class="hello__name">Name</label>
    <input type="text" class= "user_name" v-model="userName" v-on:keyup.enter="addUserName">
</div>
</template>

<script>
export default{
    data() {
        return {
            userName: ""
        };
    },
    methods: {
        addUserName() {
            this.$emit("addName",this.userName);
        }
    }
}
</script>