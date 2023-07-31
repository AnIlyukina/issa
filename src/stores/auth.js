import { defineStore } from "pinia";
import { ref, computed } from "vue";
import api from "../api/api.js";

import axios from 'axios'

export const useAuthStore = defineStore('auth', () => { 
  const isAuth = computed(() => localStorage.getItem('token'))
  let user = ref({})
  // let authToken = ref('')
  // let authUser = ref('')
  // let authLoading = ref('');

  const register = ({email, password}) => {
    return new Promise (async (resolve, reject) => {
      try {
        console.log({ email, password });
        const data = await api.post("/registration", { email, password });
        console.log(data, 'data')
        resolve(true)
      } catch (error) {
        reject(error)
      }
    })
  }

  const login = ({ username, password }) => {
    console.log(username, password);
    return new Promise(async (resolve, reject) => {
      try {
        const response = await api.post("/login", { username, password });
        console.log(response, "response");
        
        localStorage.setItem('token', response.data.token)
        //user.value = response.data.user

        isAuth.value = true;

      
        resolve(true);
      } catch (error) {
        reject(error.response.data?.message);
      }
    });
  };

  const refreshToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await api.post("/refresh");

        authToken.value = data.token

        resolve(true);
      } catch (error) {
        reject(e.response.data?.message);
      }
    });
  };

  const init = async() => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_DOMAIN}/refresh`);
    } catch (e) {
      console.log(e.response.data?.message);
    }

  }

  const logout = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await api.post("/logout");
        localStorage.removeItem('token')
        user = {}

        resolve(true);
      } catch (error) {
        reject(e.response.data?.message);
      }
    });
  };



  return {
    isAuth,
    register,
    login,
    refreshToken,
    logout,
  };
})