<template>
  <Login></Login>
</template>

<script>
import {getAuth, onAuthStateChanged} from "firebase/auth";
import router from "../../router/router";
import Login from "@/components/Login";
import VueSimpleAlert from "vue-simple-alert";

const auth = getAuth();


onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Logged in")
    VueSimpleAlert.fire({
        type: 'success',
        title: 'Successfully Signed In',
        text: 'Redirecting you to your dashboard',
        // footer: '<a href>Why do I have this issue?</a>'
    }).then(r => {
      console.log(r.value);
      router.push("/home");
    });
    
    
    // VueSimpleAlert.alert("Hello Vue Simple Alert.");
    
  } else {
    console.log("not Logged in")
  }
});



export default {
  name: "SignIn",
  components: {
    Login,
  },
};
</script>

<style>

</style>
