import axios from "axios";
import { useAuthStore } from "../stores/auth.js";
import { useRouter } from "vue-router";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_DOMAIN,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use((config) => {
  console.log(config, 'config')
  if (config.url !== "/login" && config.url !== "/registration") {
    //config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  }
  return config;
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log(error);
    if (error.response.status === 401) {
      if (localStorage.getItem("refresh_token")) {
        const store = useAuthStore();
        store.refreshToken();
      }
    } else {
      const router = useRouter();
      router.push({
        name: "Login",
      });
    }
  }
);
export default api