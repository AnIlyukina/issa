import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_DOMAIN,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use((config) => {
  //config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
})

export default api