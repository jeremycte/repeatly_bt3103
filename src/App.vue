<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/registration">register</router-link>
    <router-link to="/resetPassword">resetPassword</router-link>
  </div>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
