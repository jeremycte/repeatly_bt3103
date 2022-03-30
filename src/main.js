import { createApp } from 'vue'
import App from './App.vue'
import router from '../router/router.js'
import "../styleguide.css"
import "../globals.css"
import VueSimpleAlert from "vue-simple-alert";

// const app = createApp({})
createApp(App).use(router, VueSimpleAlert).mount('#app')
// app.use(VueSimpleAlert);
