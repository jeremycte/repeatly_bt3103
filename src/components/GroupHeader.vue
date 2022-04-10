<template>
  <div class="headerDashboardTitle">
    <h1 class="dashboard-title-1 inter-bold-heavy-metal-50px">{{dashboardTitle}}</h1>
    <!-- <button class="sync-button" @click="searchBtn()" > -->

    <!-- <div class="searchbox">
        <input v-if="visibility"
        type="search"
        class="search-bar inter-normal-silver-chalice-30px" id="searchBar"
        placeholder="What are you looking for?"
        v-on:keyup="this.getSearchVal()"/>
    </div>
    <button type ="submit" class="icon-search" @click="initialGetSearchVal()">
        <img class="icon-image" src="../../img/search2.png" />
    </button> -->
    <!-- </button> -->
    
    <router-link to="/create-group">
      <img class="addBtnDashboard" src="../../img/add.svg" />
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "GroupHeader",
    props: ["dashboardTitle","to"],
    data: () => ({
    visibility: false
    }),
    methods: {
      searchBtn(){
        window.location.reload();
      },
      getSearchVal(){
        var textVal = document.getElementById("searchBar").value;
        this.$emit('getSearchVal',[textVal,this.visibility])
      },
      initialGetSearchVal(){
        this.visibility = !this.visibility
        this.$emit('getSearchVal',["",this.visibility])
      }
    },
  };
</script>

<style scoped>
  .headerDashboardTitle {
    display: flex;
    position: relative;
    /* width: 1359px; */
    margin-top: 25px;
  }
  .addBtnDashboard {
    height: 50px;
    width: 50px;
    margin-left: 31px;
    margin-top: 16px;
  }
  .dashboard-title-1 {
    letter-spacing: 0;
    line-height: 70px;
    min-height: 70px;
    white-space: nowrap;
    width: 500px;
  }
  .search-function {
    float: right;
    display: flex;
    margin-left: 17px;
  }
  
  .search-bar {
    border: 1px solid var(--heavy-metal);
    padding: 6px;
    border-radius: 20px;
    margin-top: 22px;
    margin-bottom: 8px;
    margin-right: 6px;
    height: 40px;
    width: 21em;
    font-size: 17px;
    font-family: var(--font-family-inter);
    font-weight: 400;
    background-color: var(--white);
    transition: all 0.3s ease;
  }
  .searchbox {
    transition: all 0.3s ease;
  }
  .icon-search {
    height: 39px;
    width: 39px;
    margin-top: 22px;
    align-items: center;
    justify-content: space-around;
    display: flex;
    border: transparent;
    background: transparent;
    cursor: pointer;
  }
  .icon-image {
    height: 30px;
    width: 30px;
  }
</style>