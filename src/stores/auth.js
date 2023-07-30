import { defineStore } from "pinia";
import { ref } from 'vue';
import api from "../api/api.js";

export const useAuthStore = defineStore('auth', () => { 
  let isAuth = ref(false)
  let authToken = ref('')
  // let authUser = ref('')
  // let authLoading = ref('');

  const register = ({email, password}) => {
    return new Promise (async (resolve, reject) => {
      try {
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
        const data = await api.post("/login", { username, password });
        console.log(data)
        
        authToken.value = data.token
        //authUser.value = data.user
        resolve(true);
      } catch (error) {
        reject(error);
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
        reject(error);
      }
    });
  };



  return {
    isAuth,
    register,
    login,
    refreshToken,
  };
})