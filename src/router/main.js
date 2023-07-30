import { createRouter, createWebHistory } from 'vue-router';

// 1. Define route components.
// These can be imported from other files
import Register from '../components/auth/Register.vue'
import Login from '../components/auth/Login.vue'
import Questionnaire from '../components/auth/Questionnaire.vue'


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {
    name: "Register",
    path: "/register/step/1",
    component: Register,
  },
  {
    name: "Questionnaire",
    path: "/register/step/2",
    component: Questionnaire,
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const  router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router
