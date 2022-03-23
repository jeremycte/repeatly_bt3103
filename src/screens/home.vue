<template>
  <div id="nav">
    <router-link to="/login">Home</router-link>
    <router-link to="/registration">register</router-link>
    <router-link to="/resetPassword">resetPassword</router-link>
  </div>
  <router-view/>
</template>

<script>
import {getAuth, onAuthStateChanged} from "firebase/auth";
import router from "@/router";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Logged in")
    router.push("/Dashboard");
  } else {
    console.log("not Logged in")
  }
});

export default {
  name: "home"
}
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a{
  font-weight: bold;
  color:#2c3e50;
  margin-left: 10px;
}

#nav a.router-link-exact-active{
  color: #42b983;
}

</style>