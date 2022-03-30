<template>
    <div class="container-center-horizontal">
        <SideNav />

        <div class="student-dashboard-homepage screen">
            <Header :dashboardTitle="MyDashboard"/>
            <CardDeck />
        </div>
    </div>
</template>

<script>
import SideNav from "../components/SideNav.vue"
import Header from "../components/Header.vue"
import CardDeck from "../components/CardDeck.vue"

export default {
    name: "Home",
    components: {
        Header,
        CardDeck,
        SideNav,
    },
    props: [
        "MyDashboard"
    ]
}
</script>

<style>
.student-dashboard-homepage {
    margin-left: 200px;
}
</style>