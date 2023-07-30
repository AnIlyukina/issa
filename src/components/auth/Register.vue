<script setup>
import AuthForm from '../auth/AuthForm.vue';
import UIInput from '../UI/UIinput.vue';
import UIAuthButton from '../UI/UIAuthButton.vue';
import { reactive } from 'vue';

import { useAuthStore } from '/src/stores/auth';
//import { storeToRefs } from 'pinia'

const initialStateFrom = {
  username: '',
  password: '',
  rePassword: '',
  isAgreed: false,
}
const initialStateError = {
  username: '',
  password: '',
  rePassword: '',
  isAgreed: '',
}

let stateError = reactive({
  ...initialStateError
})
const stateForm = reactive({
  ...initialStateFrom,
})

const store = useAuthStore()

const checkValidForm = () => {
  let errors = false
  for (let key in stateError) {
    stateError[key] = ''

    if (key === 'isAgreed') {
      if (!stateForm[key]) {
        stateError[key] = 'Прочитай политику' 
        errors = true
      }
    }
    if (key === 'username') {
      if (!stateForm[key]) {
        stateError[key] = 'Заполни email'
        errors = true
      } else {
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(stateForm.username) == false) {
          stateError[key] = 'Введи корректный email'
          errors = true
        }
      }
    }
    if (key === 'password') {
      if (!stateForm[key]) {
        stateError[key] = 'Заполни пароль' 
        errors = true
      } else {
        if (stateForm[key].length < 8) {
          stateError[key] = 'Пароль не менее 8 символов' 
        }
      }  
    }

    if (key === 'rePassword') {
      if (!stateForm[key]) {
        stateError[key] = 'Повтори пароль' 
        errors = true
      } else {
        if (stateForm[key] !== stateForm.password) {
          stateError[key] = 'Пароли не совпадает' 
          errors = true
        }
      }
    }
  }
  return errors
} 

const signUp = async () => {
  const errors = checkValidForm()
  if (errors) {
    return
  }

  try {
    await store.register({
      email: stateForm.username,
      password: stateForm.password,
    })
  } catch (err) {
    console.log(err)
  }

}
</script>

<template>
  <auth-form
    :form-name="'Registration'"
    @submit-form="signUp"
  >
    <u-i-input
      v-model="stateForm.username"
      :type="'text'"
      :label="'Email'"
      :icon-name="'fa-solid fa-envelope'"
      :error="stateError.username"
    />
    <u-i-input
      v-model="stateForm.password"
      :type="'password'"
      :label="'Password'"
      :icon-name="'fa-solid fa-lock'"
      :error="stateError.password"
    />
    <u-i-input
      v-model="stateForm.rePassword"
      :type="'password'"
      :label="'Repeat password'"
      :icon-name="'fa-solid fa-lock'"
      :error="stateError.rePassword"
    />

    <div
      class="
          dark:text-white
        ">
      <label for="" class="mr-[3px]">
        <input v-model="stateForm.isAgreed" type="checkbox"  :error="stateError.rePassword"/>
        By selecting "Register", you are confirming that you have read and agree Privacy Policy
      </label>
    </div>
    <div class="h-[30px]">
    <span
      v-show="stateError.isAgreed"
      class="block font-bold text-[13px] text-red-500 text-center"
      >
      {{ stateError.isAgreed }}
    </span>
  </div>

    <u-i-auth-button
      :type="'submit'"
      :name="'Register'"
    />

    <div
      class="
          text-center
          mt-[25px]
          w-[100%]
          text-[.9em]
          dark:text-white"
    >
      <p>
        Do have an account?
        <a
          class="
            font-bold
            hover:underline
          "
          href="#"
          @click="$router.push({name: 'Login'})"
        >
          Login
        </a>
      </p>
    </div>

  </auth-form>
</template>


<style scoped>
</style>
