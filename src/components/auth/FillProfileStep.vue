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

const fillProfileSteps = [
  {
    name: "main",
    required: true,
    component: MainProfileInfo,
  },
  {
    name: "goals",
    required: false,
    component: Goals,
  },
  {
    name: "humanQualities",
    required: false,
    component: HumanQualities,
  },
  {
    name: "bestDate",
    required: false,
    component: BestDate,
  },
  {
    name: "hobby",
    required: false,
    component: Hobby,
  },
  {
    name: "zodiacSign",
    required: false,
    component: ZodiacSign,
  },
  {
    name: "orientation",
    required: false,
    component: Orientation,
  },
  {
    name: "badHabits",
    required: false,
    component: BadHabits,
  },
  {
    name: "about",
    required: false,
    component: About,
  },
];

const currentStep = ref(fillProfileSteps[0].name);

const stateProfile = reactive({ ...initialStateProfile });

const changeStateValue = (data) => {
  console.log(data);
  stateProfile[data.prop] = data.value;
};

const nextStep = (index) => {
  //TODO дописать условие на обязательные параметры
  // if (fillProfileSteps[index].required) {
  //
  // }
  if (isLastStep(index)) {
    store.saveProfile(stateProfile);
  } else {
    currentStep.value = fillProfileSteps[index + 1].name;
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
          @click="nextStep(index)"
        >
          {{ isLastStep(index) ? "Сохранить" : "Дальше" }}
        </button>
      </div>
    </component>
  </div>
</template>
