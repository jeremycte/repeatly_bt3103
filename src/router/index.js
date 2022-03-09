import { createRouter, createWebHistory } from 'vue-router'
import login from "@/views/login";
import registration from "@/views/registration";
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
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router