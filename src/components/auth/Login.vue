<script setup>
import UIInput from '../UI/UIinput.vue'
import UIAuthButton from '../UI/UIAuthButton.vue';
import AuthForm from '../auth/AuthForm.vue'

import { reactive } from 'vue';
import { useAuthStore } from '../../stores/auth';

import { useRouter } from 'vue-router';


const router = useRouter()
const store = useAuthStore()

const initialStateFrom = {
  username: '',
  password: '',
}
const initialStateError = {
  username: '',
  password: '',
}

let stateError = reactive({
  ...initialStateError
})
const stateForm = reactive({
  ...initialStateFrom,
})


const checkValidForm = () => {
  let errors = false
  for (let key in stateError) {
    stateError[key] = ''

    if (key === 'username') {
      if (!stateForm[key]) {
        stateError[key] = 'Заполни email'
        errors = true
      } else {
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(stateForm.username) == false) {
          stateError[key] = 'Введите корректный email'
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

  }
  return errors
}

const signIn = async () => {
  const error = checkValidForm()
  if (error) {
    return
  }

  try {
    await store.login(stateForm)
    router.push({name: 'Main'})
  } catch (err) {
    console.log(err)
  }
}


</script>
<template>
  <auth-form
    :form-name="'Войти'"
    @submit-form="signIn"
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
      :label="'Пароль'"
      :icon-name="'fa-solid fa-lock'"
      :error="stateError.password"
    />
    <div
      class="
          text-center
          mt-[-15px]
          mb-[15px]
          text-[0.9em]
          dark:text-white
          inline-flex
          w-[100%]
          justify-between
        ">
      <label for="" class="mr-[3px]">
        <input type="checkbox"/>
        Запомнить меня
      </label>
      <a href="#" class="hover:underline ">Забыли пароль?</a>
    </div>

    <u-i-auth-button
      :type="'submit'"
      :name="'Login'"
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
        У тебя нет аккаунта?
        <a
          class="
            font-bold
            hover:underline
          "
          href="#"
          @click="$router.push({name: 'Register'})"
        >
          Зарегистрираться
        </a>
      </p>
    </div>
  </auth-form>
</template>
<style scoped>
</style>
