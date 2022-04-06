<template>
    <div class="container-center-horizontal">
        <SideNav />

        <div class="student-dashboard-homepage screen">
            <Header :dashboardTitle="MyDashboard"/>
            <CardDeck />
        </div>
        <div v-if="visible" class="help">
            <textarea disabled class="help-description inter-normal-black-20px ">Text Box Bro with HelpText Box Bro with HelpText Box Bro with HelpText Box Bro with HelpText Box Bro with HelpText Box Bro with HelpText Box Bro with HelpText Box Bro with Help</textarea>
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
    visible: false
  }),
  props: [
      "MyDashboard"
  ]
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