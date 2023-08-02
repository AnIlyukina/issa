<script setup>
import AuthForm from "../auth/AuthForm.vue";

import ProgressStep from "../auth/ProgressStep.vue";

import RegisterStep from "../auth/RegisterStep.vue"
import FillProfileStep from "../auth/FillProfileStep.vue"
import LoadPhotoStep from "../auth/LoadPhotoStep.vue"

import { useAuthStore} from '../../stores/auth';
import {storeToRefs} from 'pinia';

const store = useAuthStore()

const { authStatus } = storeToRefs(store)

const steps = [
  {
    id: 1,
    status: 'registration',
    formName: 'Регистрация',
    name: 'Знакомимся',
  },
  {
    id: 2,
    status: 'fillProfile',
    formName: 'Мы хотим знать о тебе чуть больше...',
    name: 'Заполнение анкеты',
  },
  {
    id: 3,
    status: 'loadPhoto',
    formName: 'Прикрепи свои фото',
    name: 'Загрузка фото',
  },
]

const getName = () => {
  return steps.find(step => step.status === authStatus.value).formName
}

</script>

<template>

  <progress-step
    :steps='steps'
    :current-step="authStatus"
  />
  <auth-form :form-name="getName()">
    <register-step
      v-if="authStatus === 'registration'"
    />
    <fill-profile-step
      v-if="authStatus === 'fillProfile'"
    />
    <load-photo-step
      v-if="authStatus === 'loadPhoto'"
    />
  </auth-form>
</template>

<style scoped></style>
