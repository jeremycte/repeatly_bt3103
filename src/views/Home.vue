<template>
    <div class="container-center-horizontal">
        <SideNav />

        <div class="student-dashboard-homepage screen">
            <Header :dashboardTitle="MyDashboard" @getSearchVal="getSearchVal($event)"/>
            <CardDeck :textVal = "textVal" :visibility = "visibility"/>
        </div>
        <div v-if="visible" class="help">
            <p disabled class="help-description inter-normal-black-20px"><strong>Welcome to the Dashboard</strong><br><br>
            In here, you can perform a few things <br><br>
                &#x2022; Create a new card deck <br><br>
                &#x2022; Search your card deck using the search function <br><br>
                &#x2022; View every card deck by clicking them <br><br>
                &#x2022; Access the other pages e.g. Settings, Groups from the side panel
            </p>
        </div>
        <img class="help-icon" src="../../img/help-icon.png" @click="visible = !visible"/>
        
    </div>
</template>

<script>
import SideNav from "../components/SideNav.vue"
import Header from "../components/Header.vue"
import CardDeck from "../components/CardDeck.vue"


export default {
  name: "Home",
  components: {
      Header,
      CardDeck,
      SideNav,
  },
  beforeMount(){
    sessionStorage.clear();
  },
  data: () => ({
    visible: false,
    textVal: "",
    visibility:false,
  }),
  props: [
      "MyDashboard"
  ],
  methods:{
    getSearchVal(outputVal){
      this.textVal = outputVal[0]
      this.visibility = outputVal[1]
    }
  }
}
</script>

<style>
.student-dashboard-homepage {
    margin-left: 290px;
}

.help-icon {
    height: 75px;
    position: fixed;
    left: 95%;
    top: 92%;
    cursor: pointer;
}

.help-button {
    position: fixed;
}

.help {
    width: 28em;
    height: 36em;
    border-radius: 40px;
    border: none;
    box-shadow: 0px 2px 8px #00000022;
    background-color: var(--humming-bird);
    position: fixed;
    left: 75.5%;
    top: 40%;
}

.help-description {
    text-align: center;
    margin-top: 70px;
    justify-content: center;
    outline:none;
    text-decoration: none;
    width: 100%;
    height: 75%;
}

p.help-description {
    max-height: 50px;
}
</style>