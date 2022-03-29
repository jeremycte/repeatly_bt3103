<template>
  <div class="headerDashboardTitle">
    <h1 class="dashboard-title inter-bold-heavy-metal-50px">{{dashboardTitle}}</h1>
    <!-- <button class="sync-button" @click="searchBtn()" > -->
      <img class="icon-search" src="../../img/search.png" />
    <!-- </button> -->
    
    <router-link to="/create-deck">
      <img class="addBtnDashboard" src="../../img/add.svg" />
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Header",
    props: ["dashboardTitle"],
    methods: {
      searchBtn(){
        window.location.reload();
      }
    },
  };
</script>

<style>
  .headerDashboardTitle {
    display: flex;
    position: relative;
    /* width: 1359px; */
    margin-top: 25px;
  }
  .icon-search {
    height: 39px;
    width: 39px;
    margin-left: 55em;
    margin-top: 22px;
    align-items: flex-end;
    display: flex;
  }

  .addBtnDashboard {
    height: 50px;
    width: 50px;
    margin-left: 31px;
    margin-top: 16px;
  }

  .dashboard-title {
    letter-spacing: 0;
    line-height: 70px;
    min-height: 70px;
    white-space: nowrap;
    width: 500px;
  }
</style>
