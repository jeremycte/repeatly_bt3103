<template>
  <button id="googleLogin" type="button" v-on:click="googleLogin()">Google Login</button>
</template>

<script>
import {GoogleAuthProvider, signInWithRedirect,getAuth,getRedirectResult} from "firebase/auth";
import firebaseApp from "../firebaseDetails.js";
import {doc, setDoc,getFirestore} from "firebase/firestore";

const db = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
const auth = getAuth();
var user = null;
async function googleRegisterFirebase() {
  try{
    if (user != null){
      const eMail = user.email;
      const userName = user.displayName;
      const date = new Date(user.metadata.creationTime);
      const day = (date.getDate()>=10) ? date.getDate().toString() : "0"+date.getDate().toString();
      const month = "0" + (date.getMonth() + 1).toString();
      const year = date.getFullYear().toString();
      const dob = year + "/" + month + "/" + day;

      const userDocRef = await setDoc(doc(db,'users',eMail),{
        username: userName,
        email: eMail,
        DOB: dob,
      })
      console.log(userDocRef);
      console.log("google registration Passed")
    }
  }catch(error){
    console.log("google registration failed")
    console.log(error)
  }

}

getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      user = result.user;
      googleRegisterFirebase();
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