<template>
  <div id = "firstContainer">
    <form id = "userForm">
      <h1 class = "titleofDiv">Login</h1>
      <div class = "formli">
        <label for="email">Email:</label>
        <input type="text" id = "email" required="" placeholder="Enter Email"> <br><br>
        <label for="password">Password:</label>
        <input type="text" id = "password" required="" placeholder="Enter Password"> <br><br>
        <div class = "save">
          <button id="savebutton" type="button" v-on:click="login()"> Login</button><br><br>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import firebaseApp from "../firebaseDetails";
firebaseApp;

export default {
  name: "emailSignIn",
  methods:{
    async login(){
      const auth = getAuth();
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      try{
        const userDetails = await signInWithEmailAndPassword(
            auth,
            email,
            password,
        )
        console.log(userDetails.user);
        console.log("login pass")
      } catch(error){
        console.log("login fail")
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
form{
  text-align: center;
  align-items: center;
  margin: auto;
}

.formli{
  display: inline-block;
  text-align: right;
}

</style>