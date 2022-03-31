<template>
  <div class="headerDashboardTitle">
    <h1 class="dashboard-title inter-bold-heavy-metal-50px">{{dashboardTitle}}</h1>
    <div class=remaining-header>
      <div class="searchbox">
        <input v-if="visible"
        type="search"
        class="search-bar"
        placeholder="What are you looking for?" />
      </div>
      <div class="search-function">
        <button type ="submit" class="icon-search" @click="visible = !visible">
         <img class="icon-image" src="../../img/search2.png" />
        </button>
        <router-link to="/create-deck">
          <img class="addBtnDashboard" src="../../img/add.svg" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
//import vClickOutside from 'v-click-outside'

  export default {
    name: "Header",
    data: () => ({
    visible: false
  }),
    /*directives: {
        clickOutside: vClickOutside.directive
      },*/
    props: ["dashboardTitle"],
    methods: {
      searchBtn(){
        window.location.reload();
      },
      /*checkSearchBox() {
          this.visible = false;
        }*/
      },
    };
</script>

<style>
  .headerDashboardTitle {
    display: flex;
    position: relative;
    /* width: 1359px; */
    margin-top: 25px;
    align-items: center;
    justify-content: space-between;
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

  .search-function {
    float: right;
    display: flex;
    margin-left: 17px;
  }
  
  .search-bar {
    border: 3px solid var(--heavy-metal);
    padding: 6px;
    border-radius: 5px;
    margin-top: 22px;
    margin-bottom: 8px;
    margin-right: 6px;
    height: 40px;
    width: 230px;
    font-size: 17px;
    background-color: var(--dark-gray);
    
  }

  .remaining-header {
    display: flex;
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
