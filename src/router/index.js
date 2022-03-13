import { createRouter, createWebHistory } from 'vue-router'
import login from "@/views/login";
import registration from "@/views/registration";
import resetPassword from "@/views/resetPassword";
import userDashboard from "@/views/userDashboard";
import Home from "@/screens/home";
import overallDashboard from "@/screens/overallDashboard";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect: '/login',
        children:[
            {
                path: '/login',
                name: 'login',
                component: login
            },
            {
                path: '/registration',
                name: 'register',
                component: registration
            },
            {
                path: '/resetPassword',
                name: 'resetPassword',
                component: resetPassword
            },
        ]
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: overallDashboard,
        redirect:'/userDash',
        children:[
            {
                path: '/userDash',
                name: 'userDash',
                component: userDashboard
            },
        ]
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router