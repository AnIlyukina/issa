<script setup>
import AuthForm from "../auth/AuthForm.vue";

import ProgressStep from "../auth/ProgressStep.vue";

import FirstStep from '../auth/FirstStep.vue'
import SecondStep from '../auth/FirstStep.vue'
import ThirdStep from '../auth/FirstStep.vue'

import { ref } from "vue";


const currentAuthStep = ref(1);


</script>

<template>

  <progress-step :current-step="currentAuthStep" />
  <auth-form :form-name="'Регистрация'" @submit-form="signUp"> 
    <first-step
      v-if="currentAuthStep === 1"
    />
    <second-step
      v-if="currentAuthStep === 2"
    />
    <third-step
      v-if="currentAuthStep === 3"
    />
  </auth-form>
</template>

<style scoped></style>
