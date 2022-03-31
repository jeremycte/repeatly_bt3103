<template>
    <div class="container-center-horizontal">
        <SideNav />
        
        <div class="students-screen">
            <StudentsPageHeader :dashboardTitle="MyDashboard" />
            <StudentView/>
        </div>
    </div>
</template>

<script>
import SideNav from "../components/SideNav.vue"
import StudentsPageHeader from '../components/StudentsPageHeader.vue'
import StudentView from '../components/StudentView.vue'

export default {
    name: "students",
    components: {
        SideNav,
        StudentsPageHeader,
        StudentView,

    },
    props: [
        "MyDashboard"
    ]
}
</script>

<style>
.students-screen {
    margin-left: 200px;
}
</style>