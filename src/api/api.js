import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_DOMAIN,
  headers: {
    "Content-Type": "application/json",
  },
});
console.log(import.meta.env.VITE_API_DOMAIN, "api");

export default api