<template>
  <div class="social-media-login">
    <div class="other-account">
      <div class="line-span">
        <p class="span-line-account  valign-text-middle inter-normal-black-14px">
          or do it via other accounts
        </p>
        <img
          class="vector-1"
          src="../../img/Login/vector1.png"
        />
        <img
          class="vector-3"
          src="../../img/Login/vector1.png"
        />
      </div>
    </div>
    <button class="button-long-google" id="googleLogin" type="button" v-on:click="googleLogin()">
    <div class="overlap-group-google border-1px-pumice">
      <img class="flat-color-iconsgoogle" src="../../img/Login/google_login.png" />
      <h1 class="title-google inter-bold-black-28px">Log In with Google</h1>
    </div>
  </button>
  </div>
</template>

<script>
import {GoogleAuthProvider, signInWithRedirect,getAuth,getRedirectResult} from "firebase/auth";
import firebaseApp from "../firebaseDetails.js";
import {doc, setDoc,getFirestore,getDoc} from "firebase/firestore";

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
      const testRef = doc(db,"users",eMail);
      const test = await getDoc(testRef);

      if (!test.exists()){
        const userDocRef = await setDoc(doc(db,'users',eMail),{
          username: userName,
          email: eMail,
          DOB: dob,
        })
        console.log(userDocRef);
      }

      console.log("google registration/login Passed")
    }
  }catch(error){
    console.log("google registration/login failed")
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
  name: "SocialMediaLogin",
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
};
</script>

<style>
.social-media-login {
  display: flex;
  flex-direction: column;
  height: 121px;
  left: 1157px;
  position: absolute;
  top: 779px;
  width: 598px;
}

.other-account {
  align-items: flex-start;
  display: flex;
  min-width: 600px;
}

.line-span {
  height: 49px;
  position: relative;
  width: 597px;
}

.span-line-account {
  height: 49px;
  left: 9px;
  letter-spacing: 0;
  line-height: 16px;
  position: absolute;
  text-align: center;
  top: 14px;
  width: 587px;
}

.vector-1 {
  height: 2px;
  left: 9px;
  position: absolute;
  top: 24px;
  width: 183px;
}

.vector-3 {
  height: 2px;
  left: 415px;
  position: absolute;
  top: 23px;
  width: 183px;
}

.button-long-google {
    align-items: flex-start;
    display: flex;
    height: 70px;
    min-width: 600px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .overlap-group-google {
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 25px;
    box-shadow: 0px 4px 4px #00000040;
    display: flex;
    height: 72px;
    margin-left: -1px;
    margin-top: -1px;
    min-width: 600px;
    padding: 11.8px 133.9px;
  }
  
  .title-google {
    align-self: center;
    letter-spacing: 0;
    /* margin-bottom: 2.81px; */
    margin-left: 27px;
    /* min-height: 32px; */
    width: 281px;
  }
</style>
