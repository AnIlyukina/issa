<script setup>
import AuthForm from '../auth/AuthForm.vue';
import UIInput from '../UI/UIinput.vue';

import ProgressStep from '../auth/ProgressStep.vue'

import UIAuthButton from '../UI/UIAuthButton.vue';
import { reactive } from 'vue';

import { useAuthStore } from '/src/stores/auth';
//import { storeToRefs } from 'pinia'

const initialStateFrom = {
  email: '',
  password: '',
  birthday: '',
  isAgreed: false,
}
const initialStateError = {
  email: '',
  password: '',
  birthday: '',
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
    if (key === 'email') {
      if (!stateForm[key]) {
        stateError[key] = 'Заполни email'
        errors = true
      } else {
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(stateForm.email) == false) {
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
  }
  return errors
}

const signUp = async () => {
  const errors = checkValidForm()
  if (errors) {
    return
  }

  try {
    await store.register(stateForm)
  } catch (err) {
    console.log(err)
  }

}
</script>

<template>
  <progress-step/>
  <auth-form
    :form-name="'Регистрация'"
    @submit-form="signUp"
  >
    <u-i-input
      v-model="stateForm.email"
      :type="'text'"
      :label="'Email'"
      :icon-name="'fa-solid fa-envelope'"
      :error="stateError.email"
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
          dark:text-white
        ">
      <label for="" class="mr-[3px]">
        <input v-model="stateForm.isAgreed" type="checkbox"/>
        Нажимая кнопку "Зарегистрироваться» я подтверждаю, что ознакомился с Политикой Конфиденциальности.
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
      :name="'Зарегистрироваться'"
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
        У тебя есть аккаунт?
        <a
          class="
            font-bold
            hover:underline
          "
          href="#"
          @click="$router.push({name: 'Login'})"
        >
          Войти
        </a>
      </p>
    </div>

  </auth-form>
</template>


<style scoped>
</style>
