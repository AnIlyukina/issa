<script setup>
import AuthForm from './AuthForm.vue';
import UIInput from '../UI/UIinput.vue';
import SelectGender from '../SelectGender.vue';
import {reactive} from 'vue';


const initialStateQuestionnaire = {
  name: '',
  location: '',
  orientation: '',
  gender: [],
  genderLooking: [],
  aims: '',
  bestDate: '',
  badHabits: '',
}

const stateQuestionnaire = reactive({...initialStateQuestionnaire})

const sendQuestionnaire = () => {
  console.log('sendQuestionnaire')
}

</script>

<template>
  <auth-form
    :form-name="'Fill out a questionnaire'"
    :type="'questionnaire'"
    @submit-form="sendQuestionnaire"
  >
    <div class=" sm:flex sm:justify-around">
      <div class="">
        <u-i-input
          v-model="stateQuestionnaire.name"
          :type="'text'"
          :label="'Your name'"
        />
        <u-i-input
          v-model="stateQuestionnaire.location"
          :type="'text'"
          :label="'Your location'"
        />
        <u-i-input
          v-model="stateQuestionnaire.orientation"
          :type="'text'"
          :label="'Your orientation'"
        />
        <div class="mb-[30px] p-2 border border-2 border-black rounded">
          <select-gender
            v-model="stateQuestionnaire.gender"
            :label="'Select your gender:'"
          />
          <select-gender
            v-model="stateQuestionnaire.genderLooking"
            :multi="true"
            :label="'Who are you looking for:'"
          />
        </div>
        <u-i-input
          v-model="stateQuestionnaire.aims"
          :type="'text'"
          :label="'Your aims'"
        />

      </div>
      <div>
        <u-i-input
          v-model="stateQuestionnaire.bestDate"
          :type="'text'"
          :label="'The best first date'"
        />
        <u-i-input
          v-model="stateQuestionnaire.bestDate"
          :type="'text'"
          :label="'What do you want to look for in people?'"
        />
        <u-i-input
          v-model="stateQuestionnaire.badHabits"
          :type="'text'"
          :label="'Bad habits'"
        />
        <label>
          Something about your
          <textarea></textarea>
        </label>

      </div>

    </div>

  </auth-form>
</template>
