<template>
  <button id="googleLogin" type="button" v-on:click="googleLogin()">Google Login</button>
</template>

<script>
import {GoogleAuthProvider, signInWithRedirect,getAuth,getRedirectResult} from "firebase/auth";
import firebaseApp from "../firebaseDetails";
firebaseApp;
const provider = new GoogleAuthProvider();
const auth = getAuth();
getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      console.log(user,token);
      console.log("login successful")
    }).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  console.log(errorCode,errorMessage,email,credential)
});

export default {
  name: "googleSignIn",
  methods:{
    async googleLogin(){
      try{
        await signInWithRedirect(auth,provider)
      }catch(error){
        console.log("google login fail")
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
  button{
    alignment: center;
  }
</style>