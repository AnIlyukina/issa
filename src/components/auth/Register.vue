<script setup>
import AuthForm from '../auth/AuthForm.vue';
import UIInput from '../UI/UIinput.vue';
import UIAuthButton from '../UI/UIAuthButton.vue';
</script>

<template>
  <auth-form
    :form-name="'Registration'"
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
    <u-i-input
      :type="'password'"
      :label="'Repeat password'"
      :icon-name="'fa-solid fa-lock'"
    />

    <div
      class="
          mb-[25px]
          dark:text-white
        ">
      <label for="" class="mr-[3px]">
        <input type="checkbox"/>
        By selecting "Register", you are confirming that you have read and agree Privacy Policy
      </label>
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
