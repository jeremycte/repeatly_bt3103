import { createRouter, createWebHistory } from 'vue-router'
import login from "@/views/login";
import registration from "@/views/registration";
import resetPassword from "@/views/resetPassword";
const routes = [
    {
        path: '/',
        name: 'Home',
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
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router