<template>
  <div id = "firstContainer">
    <form id = "userForm">
      <h1 class = "titleofDiv">Reset Password</h1>
      <div class = "formli">
        <label for="email">Email:</label>
        <input type="text" id = "email" required="" placeholder="Enter Email"> <br><br>
        <div class = "Send Link">
          <button id="sendLink" type="button" v-on:click="sendLink()"> sendLink</button><br><br>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {getAuth,sendPasswordResetEmail} from "firebase/auth";

export default {
  name: "forgetPassword",
  methods:{
    async sendLink(){
      try{
        const auth = getAuth();
        const email = document.getElementById("email").value
        await sendPasswordResetEmail(auth,email)
        alert("A reset password link has been sent to your email.")
        console.log("forget password passed")
      } catch(error){
        alert("Please provide a valid email")
        console.log("forget Password failed")
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