<script setup>
import AuthForm from './AuthForm.vue';
import UIInput from '../UI/UIinput.vue';
</script>

<template>
  <auth-form
    :form-name="'Fill out a questionnaire'"
    :type="'questionnaire'"
    @submit-form="signIn"
  >
    <div class=" sm:flex sm:justify-around">
      <div class="">
        <u-i-input
          :type="'text'"
          :label="'Your name'"
        />
        <u-i-input
          :type="'text'"
          :label="'Your location'"
        />
        <u-i-input
          :type="'text'"
          :label="'Sex'"
        />
        <u-i-input
          :type="'text'"
          :label="'Who are you looking for'"
        />
        <u-i-input
          :type="'text'"
          :label="'Your Orientation'"
        />
        <u-i-input
          :type="'text'"
          :label="'Your aims'"
        />

      </div>
      <div>
        <u-i-input
          :type="'text'"
          :label="'The best first date'"
        />
        <u-i-input
          :type="'text'"
          :label="'What do you want to look for in people?'"
        />
        <u-i-input
          :type="'text'"
          :label="'Bad Habbits'"
        />
        <textarea></textarea>

      </div>

    </div>
    
  </auth-form>
</template>