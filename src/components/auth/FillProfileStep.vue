<script setup>
import api from "../../api/api.js";

import { reactive, ref } from "vue";
import MainProfileInfo from "../common/MainProfileInfo.vue";
import ZodiacSign from "../common/ZodiacSign.vue";
import Orientation from "../common/Orientation.vue";
import Goals from "../common/Goals.vue";
import HumanQualities from "../common/HumanQualities.vue";
import BadHabits from "../common/BadHabits.vue";
import BestDate from "../common/BestDate.vue";
import Hobby from "../common/Hobby.vue";
import About from "../common/About.vue";

import { useAuthStore } from "../../stores/auth";

const getCities = api.get("/city");
const getGenders = api.get("/gender");
const getAims = api.get("/aim");
const getHumanQualities = api.get("/important");
const getBestDate = api.get("/best-date");
const getHobby = api.get("/hobby");
const getZodiacSign = api.get("/zodiac-sign");
const getOrientation = api.get("/orientation");
const getBadHabit = api.get("/bad-habbit");

let profileData = ref({});
const isLoading = ref(true);

const store = useAuthStore();

Promise.all([
  getCities,
  getGenders,
  getAims,
  getHumanQualities,
  getBestDate,
  getHobby,
  getZodiacSign,
  getOrientation,
  getBadHabit,
]).then((values) => {
  profileData.value.cityList = values[0].data;
  profileData.value.genderList = values[1].data;
  profileData.value.goalList = values[2].data;
  profileData.value.humanQualitiesList = values[3].data;
  profileData.value.bestDateList = values[4].data;
  profileData.value.hobbyList = values[5].data;
  profileData.value.zodiacSignList = values[6].data;
  profileData.value.orientationList = values[7].data;
  profileData.value.badHabitList = values[8].data;

  isLoading.value = false;
});

const initialStateProfile = {
  name: "", // имя отображаемое в профиле
  city: null, // локация пользователя
  gender: [], // пол
  genderLooking: [], // пол который ищу

  goal: [], // цель на сайте

  humanQualities: [], // что для тебя важно

  bestDate: [], // лучшая свиданка

  orientation: [], // гетеро гомо ...

  zodiacSign: [], // знак зодика

  badHabit: [], // прохие привычки

  hobby: [], // хобби

  about: "", // что то о себе
};

const initialStateError = {
  name: "", // имя отображаемое в профиле
  city: "", // локация пользователя
  gender: "", // пол
  genderLooking: "", // пол который ищу
  goal: "", // цель на сайте
  humanQualities: "", // что для тебя важно
  bestDate: "", // лучшая свиданка
  orientation: "", // гетеро гомо ...
  zodiacSign: "", // знак зодика
  badHabit: "", // прохие привычки
  hobby: "", // хобби
  about: "", // что то о себе
}

const fillProfileSteps = [
  {
    name: "main",
    required: true,
    component: MainProfileInfo,
    profileField: ['name', 'city', 'gender', 'genderLooking'],
  },
  {
    name: "goal",
    required: false,
    component: Goals,
    profileField: ['goal'],
  },
  {
    name: "humanQualities",
    required: false,
    component: HumanQualities,
    profileField: ['humanQualities'],
  },
  {
    name: "bestDate",
    required: false,
    component: BestDate,
    profileField: ['bestDate'],
  },
  {
    name: "hobby",
    required: false,
    component: Hobby,
    profileField: ['hobby'],
  },
  {
    name: "zodiacSign",
    required: false,
    component: ZodiacSign,
    profileField: ['zodiacSign'],
  },
  {
    name: "orientation",
    required: false,
    component: Orientation,
    profileField: ['orientation'],
  },
  {
    name: "badHabits",
    required: false,
    component: BadHabits,
    profileField: ['badHabits'],
  },
  {
    name: "about",
    required: false,
    component: About,
    profileField: ['about'],
  },
];

const currentStep = ref(fillProfileSteps[0].name);

const stateProfile = reactive({ ...initialStateProfile });

let stateError = reactive({...initialStateError });

const changeStateValue = (data) => {
  stateProfile[data.prop] = data.value;
};

const checkValidForm = (fields) => {
  let isValid = true
  for (let i = 0; i < fields.length; i++) {
    const prop = fields[i]
    if (!stateProfile[prop] || stateProfile[prop].length === 0) {
      isValid = false
      stateError[prop] = 'Это поле необходимо заполнить'
    } else {
      stateError[prop] = ''
    }
  }
  return isValid
}

const nextStep = (index) => {
  let isValid = true
  if (fillProfileSteps[index].required) {
    isValid = checkValidForm(fillProfileSteps[index].profileField)
  }

  if (isValid) {
    if (isLastStep(index)) {
      store.saveProfile(stateProfile);
    } else {
      currentStep.value = fillProfileSteps[index + 1].name;
    }
  }

};

const isLastStep = (index) => {
  return index === fillProfileSteps.length - 1;
};

const previousStep = (index) => {
  currentStep.value = fillProfileSteps[index - 1].name;
};
</script>

<template>
  <div
    v-for="(step, index) in fillProfileSteps"
    class="dark:text-white"
  >
    <component
      v-if="currentStep === step.name"
      :state-profile="stateProfile"
      :state-error="stateError"
      :profile-data="profileData"
      :is="step.component"
      @update:values="changeStateValue"
    >
      <div class="flex justify-between mt-10">
        <div>
          <a
            v-if="index !== 0"
            class="p-1 border-b dark:border-white cursor-pointer"
            @click="previousStep(index)"
          >
            Назад
          </a>
        </div>
        <button
          class="dark:bg-white dark:text-black p-1 px-5 rounded-2xl"
          @click.prevent="nextStep(index)"
        >
          {{ isLastStep(index) ? "Сохранить" : "Дальше" }}
        </button>
      </div>
    </component>
  </div>
</template>
