<template>
  <h1> This is the user Dashboard</h1>
  <dashboard></dashboard>
  <dashboardDeckDisplay></dashboardDeckDisplay>
</template>

<script>
import dashboard from "@/components/dashboard";
import dashboardDeckDisplay from "@/components/dashboardDeckDisplay";

export default {
  name: "userDashboard",
  components:{
    dashboard,
    dashboardDeckDisplay,
  }
}
</script>

<style scoped>

</style>