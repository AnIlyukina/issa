<script setup>
import AuthForm from './AuthForm.vue';
import UIInput from '../UI/UIinput.vue';
import SelectGender from '../SelectGender.vue';
import {reactive} from 'vue';


const initialStateQuestionnaire = {
  name: '', // имя отображаемое в профиле
  city: 1, // локация пользователя
  orientation: 1, // гетеро гомо ...
  zodiacSign: 1, // знак зодика
  gender: [1], // пол
  genderLooking: [1, 2], // пол который ищу
  aims: 1, // цель на сайте
  bestDate: 1,// лучшая свиданка
  badHabits: [1,2], // прохие привычки
  important: [1,2, 3], // что для тебя важно
  hobby: [1,2,3], // хобби
  about: '' // что то о себе
}

const stateQuestionnaire = reactive({...initialStateQuestionnaire})

const sendQuestionnaire = () => {
  console.log('sendQuestionnaire')
}

</script>

<template>
  <auth-form
    :form-name="'Заполни анкету'"
    :type="'questionnaire'"
    @submit-form="sendQuestionnaire"
  >
    <div class=" sm:flex sm:justify-around">
      <div class="">
        <u-i-input
          v-model="stateQuestionnaire.name"
          :type="'text'"
          :label="'Ваше имя'"
        />
        <u-i-input
          v-model="stateQuestionnaire.location"
          :type="'text'"
          :label="'Где вы находитесь?'"
        />
        <u-i-input
          v-model="stateQuestionnaire.orientation"
          :type="'text'"
          :label="'Ваша ориентация'"
        />
        <u-i-input
          v-model="stateQuestionnaire.aims"
          :type="'text'"
          :label="'Ваши цели'"
        />
        <select-gender
          v-model="stateQuestionnaire.gender"
          :label="'Выбере ваш пол:'"
        />
        <select-gender
          v-model="stateQuestionnaire.genderLooking"
          :multi="true"
          :label="'Кто вам интересен:'"
        />
      </div>
      <div>
        <u-i-input
          v-model="stateQuestionnaire.bestDate"
          :type="'text'"
          :label="'Лучшее первое свидание'"
        />
        <u-i-input
          v-model="stateQuestionnaire.bestDate"
          :type="'text'"
          :label="'Важные качества для вас?'"
        />
        <u-i-input
          v-model="stateQuestionnaire.badHabits"
          :type="'text'"
          :label="'Плохие привычки'"
        />
        <label>
          Что-то еще о себе
          <textarea></textarea>
        </label>

      </div>

    </div>

  </auth-form>
</template>
