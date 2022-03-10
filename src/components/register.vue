<template>
  <div id = "firstContainer">
    <form id = "userForm">
      <h1 class = "titleofDiv">Registration</h1>
      <div class = "formli">
        <label for="email">Email:</label>
        <input type="text" id = "email" required="" placeholder="Enter Email"> <br><br>
        <label for="password">Password:</label>
        <input type="text" id = "password" required="" placeholder="Enter Password"> <br><br>
        <div class = "save">
          <button id="savebutton" type="button" v-on:click="register()"> Save</button><br><br>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



export default {
  name: "register",
  methods:{
    async register(){
      const auth = getAuth();
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      alert("registering account")
      try {
        const userDetails = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
        )
        console.log(userDetails.user)
        console.log("registration pass")
      }catch(error){
        console.log("registration fail")
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