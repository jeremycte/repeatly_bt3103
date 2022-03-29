<template>
  <Login></Login>
</template>

<script>
import {getAuth, onAuthStateChanged} from "firebase/auth";
import router from "../../router/router";
import Login from "@/components/Login";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Logged in")
    router.push("/home");
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
