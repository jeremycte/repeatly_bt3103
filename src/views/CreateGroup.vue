<template>
    <div class="container-center-horizontal">
        <SideNav />
        <div class="student-dashboard-homepage screen">
    
        <Header3 :dashboardTitle="MyDashboard"/>
  
    <div class="create-Group-overlap-group">
        <div class="overlap-group-createGroup">
        <img class="illustration" src="../../img/CreateGroup/createGrpImage.png" />
        <div class="overlap-group-nameUrGroup border-1px-quick-silver">
            <input
            class="createGroup inter-normal-silver-chalice-30px"
            id="groupName"
            name="nameyourgroup"
            placeholder="Name your Group"
            type="text"
            required
            />
        </div>
        <div class="overlap-group-createGroupTag border-1px-quick-silver">
            <input
            class="createGroup inter-normal-silver-chalice-30px"
            id="GroupTag"
            name="Grouptag"
            placeholder="Group Tag e.g. Sem 1"
            type="text"
            required
            />
        </div>
        <btn class="add-student-createGroupbtn" v-on:click="save()">
            <div class="frame-1-createGroup">
            <h1 class="createGroup-titleBtn inter-semi-bold-white-28px">Create Group</h1>
            </div>
        </btn>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
import SideNav from "../components/SideNav.vue"
import Header3 from "../components/Header3.vue"
import firebaseApp from "@/firebaseDetails";
import {getAuth} from "firebase/auth";
import {collection,addDoc,getFirestore} from "firebase/firestore";
import VueSimpleAlert from "vue-simple-alert";

const auth = getAuth();
const db = getFirestore(firebaseApp);
console.log(auth.userEmail)
export default {
    
  name: "CreateGroup",
  components: {
        SideNav,
        Header3
 
    },
    methods: {
    //Need to be replaced with create groups
      async save(){
        try{
          const userEmail = auth.currentUser.email;
          const group = document.getElementById("GroupName").value;
          const Group = group.charAt(0).toUpperCase() + group.slice(1);
          await addDoc(collection(db,"users",String(userEmail),"Groups"),
            {
              title: Group ,
              tag: document.getElementById("GroupTag").value,
              description: document.getElementById("description").value,
              estimatedTime: 0,
              needsRecapping: 0,
              totalCards: 0,
              uncertainCards: 0,
            })
          VueSimpleAlert.fire({
              type: 'success',
              title: 'Successfully Created '+ document.getElementById("GroupName").value +' Group',
              // footer: '<a href>Why do I have this issue?</a>'
          }).then(() => {
            this.$router.push({name: "Dashboard"})
          });
        }catch(error){
          console.log(error)
          VueSimpleAlert.fire({
            type: 'error',
            title: 'Create Group Failed',
            text: 'Refer to error message below',
            footer: '<p>' + error +'</p>'
          })
        }
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
  .create-Group-overlap-group {
    align-items: flex-start;
    display: flex;
    height: 856px;
    min-width: 1491px;
  }

  .overlap-group-createGroup {
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

  .createGroup {
    background-color: transparent;
    border: 0;
    height: 42px;
    letter-spacing: 0;
    line-height: 42px;
    padding: 0;
    white-space: nowrap;
    font-family: var(--font-family-inter);
    font-size: var(--font-size-l);
    width: 100%;
  }

  .createGroup::placeholder {
    color: 
#afafaf99;
  }

  .overlap-group-createGroupTag {
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

  .overlap-group-txtareaCreateGroup {
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

  .Group-description {
    background-color: transparent;
    border: 0;
    font-family: var(--font-family-inter);
    font-size: var(--font-size-l);
    height: 145px;
    letter-spacing: 0;
    line-height: 42px;
    padding: 0;
    width: 600px;
  }

  .Group-description::placeholder {
    color: #afafaf7a;
  }

  .add-student-createGroupbtn {
    background-color: var(--shamrock);
    border-radius: 25px;
    height: 74px;
    width: 312px;
    cursor: pointer;
    align-items: flex-start;
    box-shadow: 0px 2px 8px #00000022;
    margin-top: 29px;
    /* min-width: 718px; */
    margin-right: 12em;
  }

  .frame-1-createGroup {
    border-radius: 25px;
    display: flex;
    align-items: flex-start;
    margin-top: 29px;
    margin-left: 89.2px;
    margin-top: 26.7px;
    /* width: 155.43px; */
    
  }

  .createGroup-titleBtn {
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