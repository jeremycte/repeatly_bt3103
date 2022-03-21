<template>
  <div id = "detailsContainer">
    <h3 id ="userInfo">Hi, my username is and my email is </h3>
    <button id="signOut" type="button" v-on:click="signOut()"> Sign Out</button><br><br>
  </div>
</template>

<script>
import firebaseApp from "@/firebaseDetails";
import {getAuth,signOut,} from "firebase/auth";
import {doc,getDoc,getFirestore} from "firebase/firestore";

const auth = getAuth();
const db = getFirestore(firebaseApp);




async function displayUserInfo(email){
  try{
    const docRef = doc(db,"users",email)
    const docVal = await getDoc(docRef)
    document.getElementById("userInfo").innerHTML = (
        "Hi, my username is " + docVal.data().username + " and my email is " +
        docVal.data().email
    )
  } catch (error){
    console.log("Display User Info not working")
    console.log(error)
  }
}



export default {
  name: "dashboard",
  methods:{
    async signOut(){
      try{
        await signOut(auth)
        console.log("signOut")
        await this.$router.push({name: "Home"})
      } catch(error){
        console.log(error)
      }
    }
  },
  beforeMount() {
    const email = auth.currentUser.email;
    displayUserInfo(email);
  }
}
</script>

<style scoped>

</style>