

<template>
  <header class = "header">
      <h1 class ="logo">TODO TODAY</h1>
      <p class = "date"> of {{ timestamp}}</p>
      <div style="clear:both"></div>
  </header>
</template>

<script>
import getDate from '../assets/getDate.js';
export default {
    data() {
        return {
            timestamp : ""
        };
    },
    created() {
        this.timestamp = String.format('{0}, {1}',getDate().date,getDate().year);
    }
};
</script>

