import { createRouter, createWebHistory } from "vue-router";

// 1. Define route components.
// These can be imported from other files
import Register from "../components/auth/Register.vue";
import Login from "../components/auth/Login.vue";
// import Questionnaire from '../components/auth/Questionnaire.vue'
import Dashboard from "../components/Dashboard.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {
    name: "Register",
    path: "/register",
    component: Register,
  },
  // {
  //   name: "Questionnaire",
  //   path: "/register/step/2",
  //   component: Questionnaire,
  // },
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "Dashboard",
    path: "/",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta?.requiresAuth)) {
    if (localStorage.getItem("token")) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
