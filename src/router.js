import { createRouter, createWebHistory } from 'vue-router'
import LandingPageLight from '@/views/LandingPageLight.vue'
import { data } from "@/data";

import SignIn from '@/views/SignIn.vue'
// import LogOut from '@/components/Logout.vue'
// import { OrderNotFound } from 'ccxt'

const routes = [
    {
        path: '/',
        name: 'LandingPageLight',
        component: LandingPageLight,
        props: { ...data}
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn,
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: LandingPageLight,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router