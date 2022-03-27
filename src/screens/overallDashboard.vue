<template>
    <div id="nav">
        <router-link to="/userDash">Home</router-link> |
        <router-link to="/students">Students</router-link>
    </div>
    <router-view />
</template>

<script>
export default {
    name: "overallDashboard",
};
</script>

<style scoped>
#nav a {
    font-weight: bold;
    color: #2c3e50;
    margin-left: 10px;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
