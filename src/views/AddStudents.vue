<template>
    <div class="container-center-horizontal">
        <SideNav />
        <div class="student-dashboard-homepage screen">
    
        <Header2 :dashboardTitle="MyDashboard"/>
  
    <div class="add-students-overlap-group">
        <div class="overlap-group-allStudentsEmail">
        <img class="illustration" src="../../img/CreateGroup/createGrpImage.png" />
        <div class="overlap-group-nameUrGroup border-1px-quick-silver">
            <input
            class="allStudentsEmail inter-normal-silver-chalice-30px"
            id="student-email"
            name="studentEmail"
            placeholder="Enter Student Email"
            type="text"
            required
            />
        </div>
        <div class="overlap-group-groupName border-1px-quick-silver">
            <select id = "group-name" name="group-name">
              <option value="" disabled selected hidden>Choose Group</option>
              <option :key="group" v-for="group in groups" :value="group">{{ group }}</option>
            </select>
        </div>
        <btn class="add-student-allStudentsEmailbtn" v-on:click="add()">
            <div class="frame-1-allStudentsEmail">
            <h1 class="allStudentsEmail-titleBtn inter-semi-bold-white-28px">Add Student</h1>
            </div>
        </btn>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
import SideNav from "../components/SideNav.vue"
import Header2 from "../components/Header2.vue"
//import firebaseApp from "@/firebaseDetails";
import {getAuth} from "firebase/auth";
//import {collection,addDoc,getFirestore} from "firebase/firestore";

const auth = getAuth();
//const db = getFirestore(firebaseApp);
console.log(auth.userEmail)
export default {
    
  name: "addStudents",
  components: {
        Header2,
        SideNav,
 
    },
    data(){
      return{
        groups:["cs2040","cs2030","bt3103","bt3102"]
      }
    },
    methods: {
    //Need to be replaced with add student
      async add(){
        console.log("add")
      },
      async back(){
        await this.$router.push({name: "Dashboard"})
      }
  },
     props: [
        "MyDashboard"
    ]
};
</script>


<style scoped>
  .add-students-overlap-group {
    align-items: flex-start;
    display: flex;
    height: 856px;
    min-width: 1491px;
  }

  .overlap-group-allStudentsEmail {
    align-items: flex-end;
    background-color: var(--humming-bird);
    border-radius: 40px;
    box-shadow: 0px 2px 8px 
#00000022;
    display: flex;
    flex-direction: column;
    margin-left: -1px;
    margin-top: 10px;
    min-height: 858px;
    padding: 31px 384.3px;
    position: relative;
    width: 1487px;
  }

  .overlap-group-nameUrGroup {
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 20px;
    box-shadow: 0px 2px 8px 
#00000022;
    display: flex;
    height: 74px;
    margin-top: 29px;
    min-width: 718px;
    padding: 15px 20.2px;
  }

  .allStudentsEmail {
    background-color: transparent;
    border: 0;
    height: 42px;
    letter-spacing: 0;
    line-height: 42px;
    padding: 0;
    white-space: nowrap;
    font-family: var(--font-family-inter);
    font-size: var(--font-size-l);
    width: 418px;
  }

  .allStudentsEmail::placeholder {
    color: 
#afafaf99;
  }

  .overlap-group-groupName {
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 20px;
    box-shadow: 0px 2px 8px 
#00000022;
    display: flex;
    height: 74px;
    margin-top: 28px;
    min-width: 718px;
    padding: 15px 20.2px;
  }

  .overlap-group-txtareaallStudentsEmail {
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 20px;
    box-shadow: 0px 2px 8px 
#00000022;
    display: flex;
    height: 206px;
    margin-top: 28px;
    min-width: 718px;
    padding: 13px 20.2px;
  }
  #group-name{
    min-width: 670px;
    text-align: center;
    margin-top:-10px;
    cursor: pointer;
  }

  .add-student-allStudentsEmailbtn {
    background-color: var(--shamrock);
    border-radius: 25px;
    height: 74px;
    width: 312px;
    cursor: pointer;
    align-items: flex-start;
    box-shadow: 0px 2px 8px #00000022;
    margin-top: 15em;
    /* min-width: 718px; */
    margin-right: 12em;
  }

  .frame-1-allStudentsEmail {
    border-radius: 25px;
    display: flex;
    align-items: flex-start;
    margin-top: 29px;
    margin-left: 89.2px;
    margin-top: 26.7px;
    /* width: 155.43px; */
    
  }

  .allStudentsEmail-titleBtn {
    height: 34px;
    letter-spacing: 0;
    /* margin-left: -5.8px;
    margin-top: -1.7px; */
    /* width: 167px; */
  }
  .illustration {
    align-self: center;
    background-position: 50% 50%;
    background-size: cover;
    height: 236px;
    margin-left: 1px;
    margin-top: 18px;
    width: 236px;
  }
</style>