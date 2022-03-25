<template>
    <div class="sidebar">
        <span class="logo-name">
            <img class="logo" src="@/assets/logo.png"/>
            <h1 class="name ">Repeatly</h1>
        </span>

        <div class="student-bar">
            <SideBarLink to="/Homepage">Homepage</SideBarLink>                
            <SideBarLink to="/Groups">Groups</SideBarLink>
            <SideBarLink to="/Settings">Settings</SideBarLink> 
        </div>

        <div class="bottom-nav">
            <hr />  
            <SideBarLink to="/Profile">Profile</SideBarLink>
            <SideBarLink to="/Sync">Sync</SideBarLink>
        </div>
        <div class= "dark-mode">
            <h1 class="dark-label">Dark <br/> Mode</h1>
            <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>
            
        </div>
    </div>

</template>
<script>
import SideBarLink from "./SideBarLink.vue"

export default {
    name:"SideNav",

    components: {
        SideBarLink
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
    width:15%;
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
    text-align: center;
    margin-top:270px
}
.hr{
    width:50%; 
    size:3;
    color:white;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
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
    text-align: left;
}
.dark-label{
    font-family: Inter;
    font-weight: 600;
    font-size: 20px;
    margin-right:20px;
    margin-top:5px;
    margin-left: 25px;
    text-align: center;
}
</style>