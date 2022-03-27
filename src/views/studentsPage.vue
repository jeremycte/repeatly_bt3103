<template>
    <router-link to="/userDash">Back Home</router-link>
    <h1>This is the Students Page</h1>
    <!-- <dashboard></dashboard> -->
    <students></students>
</template>

<script>
// import dashboard from "@/components/dashboard";
// import dashboardDeckDisplay from "@/components/dashboardDeckDisplay";
import students from "@/components/students";

export default {
    name: "studentsPage",
    components: {
        students,
    },
};
</script>

<style scoped></style>
