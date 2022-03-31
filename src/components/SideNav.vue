<template>
    <div class="sidebar">
        <span class="logo-name">
            <img class="logo" src="@/assets/logo.png"/>
            <h1 class="name">Repeatly</h1>
        </span>

        <div class="student-bar">
          <div class="side-row">
            <img class="icon" src="../../img/SideBarImages/mdi-home-circle@2x.png"/>
            <SideBarLink to="/home">Homepage</SideBarLink>
          </div>
          <div class="side-row">
            <img class="icon" src="../../img/SideBarImages/groups@2x.png"/>               
            <SideBarLink to="/groups">Groups</SideBarLink>
          </div>
          <div class="teacher-bar" v-if="role=='teacher'">
            <div class="side-row">
              <img class="icon" src="../../img/SideBarImages/vector-34@2x.png"/>
              <SideBarLink to="/students">Students</SideBarLink>
            </div>
          </div>
          <div class="side-row">
            <img class="icon" src="../../img/SideBarImages/ci-settings-filled@2x.png"/> 
            <SideBarLink to="/settings">Settings</SideBarLink>
          </div> 
        </div>

        <div class="bottom-nav">
            <hr /> 
            <div class="side-row">
              <img class="icon-profile" src="../../img/SideBarImages/oval-37@2x.png"/>  
              <SideBarLink to="/settings">{{username}}</SideBarLink>
            </div> 
            <div class="sync">
              <div class="side-row">
                <img class="sync-icon" src="../../img/SideBarImages/sync-arrows--1--1@2x.png"/> 
                <button class="sync-button" @click="reloadPage" >Sync</button>
              </div>
            </div>
            
            <div class= "sign-out">
                <button class="sign-out-button" @click="signOut">Sign Out</button>
          </div>   
        </div>
    </div>

</template>
<script>
import SideBarLink from "./SideBarLink.vue"
import firebaseApp from "@/firebaseDetails";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {doc,getDoc,getFirestore} from "firebase/firestore";
import router from "../../router/router";

const db = getFirestore(firebaseApp);
const auth = getAuth();

async function displayUserInfo(email){
  try{
    const docRef = doc(db,"users",email)
    const docVal = await getDoc(docRef)
    const username = String(docVal.data().username)
    return username
  } catch (error){
    console.log("Display User Info not working")
    console.log(error)
  }
}

async function getRole(email){
  try{
    const docRef = doc(db,"users",email)
    const docVal = await getDoc(docRef)
    const role = String(docVal.data().role)
    return role
  } catch (error){
    console.log("error")
  }
}

export default {
    name:"SideNav",

    components: {
        SideBarLink
    },
    data() {
        return {
            role:"",
            username:"",
  
        }
    },

    mounted() {
        onAuthStateChanged(auth,async (user) => {
            if(user) {
                console.log(user.email)
                const tempUsername = await displayUserInfo(user.email)
                const tempRole= await getRole(user.email)
                this.username = tempUsername;
                this.role = tempRole
            }
        })
    },

    methods: {
      reloadPage(){
        window.location.reload();
      },

      async signOut(){
        auth.signOut().then(() => {
          console.log("user has sign out")
          router.push('/sign-in')
        })
      }
    }
}
</script>
<style scoped>
.student-bar {
  margin-left: 1em;
}
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
    
    border-top-right-radius: 1.25em;
    border-bottom-right-radius: 1.25em;
}
.logo-name{
    display:flex;
    margin-bottom: -1.75em;
    margin-top: 2em;
    margin-left: 0.625em;
}
.name{
    letter-spacing: 0;
    line-height: 0.525em;
    min-height: 3.188em;
    width: 4.625em;
    font-family: inter;
    font-size: 2.2em;
    font-weight: bold;
    margin-top: 0.625em;
    margin-left: 0.438em ;
}
.logo{
    height:3.75em;
    width: 3.75em;
}
.sidebar-item-hover{
    color: #b49af1;
}
.bottom-nav{
    width:96%;
    text-align: center;
    position: absolute;
    bottom: 0%;
    margin-bottom: 1.25em;
}
.hr{
    size:3;
    color:white;
}

.sign-out{
    display: inline-flex;
    text-align: center;
    text-align: left

}
.sign-out-button{
    display: flex;
    font-family: Inter;
    font-weight: 600;
    font-size: 20px;
    margin-right:2em;
    background: #8d61f3;
    color: white;
    border:none;
    border-radius:5em;
    cursor: pointer;
    padding: 1em 2em;

}
.sign-out-button:hover{
    background-color: #cdb9fa

}
.sync{
  display: flex;
  text-align: left;
  margin-left:3.125em;
  margin-bottom: 1.25em;
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
  width:2.5em;
  height:2.5em;
  margin-top: 1.25em;
  margin-right: -0.625em;

}

.sync-icon{
  width:2.5em;
  height:2.5em;
  margin-top: 1em;
  margin-right: 1em;
  margin-left:-1.875em;
}
.icon-profile{
  width:2.75em;
  height:2.75em;
  margin-top: 1em;
  margin-left: 1.15em;
}

</style>