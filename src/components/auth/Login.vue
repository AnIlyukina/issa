<script setup>
import UIInput from '../UI/UIinput.vue'
import UIAuthButton from '../UI/UIAuthButton.vue';
import AuthForm from '../auth/AuthForm.vue'

</script>
<template>
  <auth-form
    :form-name="'Login'"
  >
    <u-i-input
      :type="'text'"
      :label="'Email'"
      :icon-name="'fa-solid fa-envelope'"
    />
    <u-i-input
      :type="'password'"
      :label="'Password'"
      :icon-name="'fa-solid fa-lock'"
    />
    <div
      class="
          text-center
          mt-[-15px]
          mb-[15px]
          text-[0.9em]
          dark:text-white
          flex
          justify-between
        ">
      <label for="" class="mr-[3px]">
        <input type="checkbox"/>
        Remember me
      </label>
      <a href="#" class="hover:underline ">Forgot Password?</a>
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
        Don't have an account?
        <a
          class="
            font-bold
            hover:underline
          "
          href="#"
          @click="$router.push({name: 'Register'})"
        >
          Register
        </a>
      </p>
    </div>
  </auth-form>
</template>
<style scoped>
</style>
