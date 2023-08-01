import { defineStore } from "pinia";
import { ref, computed } from "vue";
import api from "../api/api.js";


export const useAuthStore = defineStore('auth', () => {
  const isAuth = computed(() => localStorage.getItem('token'))

  //let user = ref({})

  const register = (stateForm) => {
    return new Promise (async (resolve, reject) => {
      try {
        const response = await api.post("/registration", stateForm);

        setToken(response.data)

        resolve(true)
      } catch (error) {
        reject(error)
      }
    })
  }

  const login = (stateForm) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await api.post("/login", stateForm);

        setToken(response.data)

        resolve(true);
      } catch (error) {
        reject(error.response.data?.message);
      }
    });
  };

  const refreshToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await api.post("/refresh");

        setToken(response.data)

        resolve(true);
      } catch (error) {
        reject(e.response.data?.message);
      }
    });
  };

  const logout = () => {
    return new Promise(async (resolve, reject) => {
      try {

        await api.post("/logout");
        removeToken()

      } catch (error) {
        reject(e.response.data?.message);
      }
    });
  };


  const setToken = ({token, refresh_token}) => {
    localStorage.setItem('token', token)
    localStorage.setItem('refresh_token', refresh_token)
  }

  const removeToken = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refresh_token')
  }



  return {
    isAuth,
    register,
    login,
    refreshToken,
    logout,
  };
})
