<template>
    <div class="sidebar">
        <span class="logo-name">
            <img class="logo" src="@/assets/logo.png"/>
            <h1 class="name ">Repeatly</h1>
        </span>

        <div class="student-bar">
          <div class="side-row">
            <img class="icon" src="../../img/SideBarImages/mdi-home-circle@2x.png"/>
            <SideBarLink to="/Homepage">Homepage</SideBarLink>
          </div>

          <div class="side-row">
            <img class="icon" src="../../img/SideBarImages/groups@2x.png"/>               
            <SideBarLink to="/Groups">Groups</SideBarLink>
          </div>

          <div class="teacher-bar" v-if="this.role == 'Teacher'">
            <div class="side-row">
              <img class="icon" src="../../img/SideBarImages/vector-34@2x.png"/>
              <SideBarLink to="/Students">Students</SideBarLink>
            </div>
            <div class="side-row">
              <img class="icon" src="../../img/SideBarImages/simple-icons-googleanalytics@2x.png"/>
              <SideBarLink to="/Analytics">Analytics</SideBarLink>
            </div>
          </div>
          <div class="side-row">
            <img class="icon" src="../../img/SideBarImages/ci-settings-filled@2x.png"/> 
            <SideBarLink to="/Settings">Settings</SideBarLink>
          </div> 
        </div>

        <div class="bottom-nav">
            <hr /> 
            <div class="side-row">
              <img class="icon-profile" src="../../img/SideBarImages/oval-37@2x.png"/>  
              <SideBarLink to="/Profile">Profile</SideBarLink>
            </div> 

              
            <div class="sync">
              <div class="side-row">
                <img class="sync-icon" src="../../img/SideBarImages/sync-arrows--1--1@2x.png"/> 
                <button class="sync-button" @click="reloadPage" >Sync</button>
              </div>
            </div>
            
            <div class= "dark-mode">
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
                <h1 class="dark-label">Dark <br/> Mode</h1>
          </div>   
        </div>
    </div>

</template>
<script>
import SideBarLink from "./SideBarLink.vue"
import {getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name:"SideNav",

    components: {
        SideBarLink
    },
    data() {
        return {
            user:false,
            role:"",
        }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth,(user) => {
            if(user) {
                this.user = user;
                this.role = user.role;
            }
        })
    },

    methods: {
      reloadPage(){
        window.location.reload();
      }
    }
}
</script>
<style scoped>
.sidebar{
    color:white;
    background-color: #A786F3;  
    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
    
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}
.logo-name{
    display:flex;
    margin-bottom: 50px;
}
.name{
    letter-spacing: 0;
    line-height: 42px;
    min-height: 51px;
    width: 154px;
    font-family: inter;
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px;
    margin-left: 15px ;
}
.logo{
    height:60px;
    width: 60px;
}
.sidebar-item-hover{
    color: #b49af1;
}
.bottom-nav{
    width:96%;
    text-align: center;
    position: absolute;
    bottom: 0%;
    margin-bottom: 20px;
}
.hr{
    size:3;
    color:white;
}
.switch {
  position: relative;
  display: inline-flex;
  width: 55px;
  height: 34px;
  margin-left:-90px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #8d61f3;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: #A786F3;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #6007f0;
}

input:focus + .slider {
  box-shadow: 0 0 1px #6007f0;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.dark-mode{
    display: inline-flex;
    text-align: center;
    text-align: left

}
.dark-label{
    font-family: Inter;
    font-weight: 600;
    font-size: 20px;
    margin-left: 25px;

}
.sync{
  display: flex;
  text-align: left;
  margin-left:50px;
  margin-bottom: 20px;
}
.sync-button {
    background: transparent;
    border:none;
    font-family: Inter;
    color: white;
    font-weight: 600;
    font-size: 20px;
    
}
.sync-button:hover {
    background-color: #cdb9fa;
    border-radius: 5px;
    
}
.side-row{
  display: flex;
}

.icon{
  width:40px;
  height:40px;
  margin-top: 20px;
  margin-right: -10px;

}

.sync-icon{
  width:35px;
  height:35px;
  margin-top: 20px;
  margin-left:-30px;
  margin-right: 20px;
}
.icon-profile{
  width:40px;
  height:40px;
  margin-top: 20px;
  margin-left:20px;
  margin-right: -3px;
}

</style>