<template>
  <h3>This is the login page</h3>
  <emailSignIn></emailSignIn>
  <googleSignIn></googleSignIn>
</template>

<script>
import emailSignIn from "@/components/emailSignIn";
import googleSignIn from "@/components/googleSignIn";
export default {
  name: "login",
  components:{
    emailSignIn,
    googleSignIn,
  }
}
</script>

<style scoped>

</style>