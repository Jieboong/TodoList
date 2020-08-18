

<template>
  <header class = "header">
      <h1 class ="logo">TODO TODAY</h1>
      <p class = "date"> of {{ timestamp}}</p>
  </header>
</template>

<script>
export default {
    data() {
        return {
            timestamp : ""
        };
    },
    created() {
        String.format = function() { 
            let args = arguments;
            return args[0].replace(/{(\d+)}/g, function(match, num) {
                num = Number(num) + 1; 
                return typeof(args[num]) != undefined ? args[num] : match; }); }

        const now = new Date();
        const year = now.getFullYear();
        const monthList = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
        const month = monthList[now.getMonth()];
        const date = now.getDate();

        this.timestamp = String.format("{0} {1}, {2}",month, date,year);

    }
};
</script>

<style>

</style>