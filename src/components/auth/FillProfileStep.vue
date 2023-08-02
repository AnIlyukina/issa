<script setup>
import {reactive, ref} from 'vue';
import MainProfileInfo from '../common/MainProfileInfo.vue'
import ZodiacSign from '../common/ZodiacSign.vue'
import Orientation from '../common/Orientation.vue'
import Goals from '../common/Goals.vue'
import HumanQualities  from '../common/HumanQualities.vue'
import BadHabits from '../common/BadHabits.vue'
import BestDate from '../common/BestDate.vue'
import Hobby from '../common/Hobby.vue'
import About from '../common/About.vue'


const initialStateProfile = {
  name: '', // имя отображаемое в профиле
  city: '', // локация пользователя
  gender: [], // пол
  genderLooking: [], // пол который ищу

  goals: null, // цель на сайте

  humanQualities: [], // что для тебя важно

  bestDate: null,// лучшая свиданка

  orientation: null, // гетеро гомо ...

  zodiacSign: null, // знак зодика

  badHabits: [], // прохие привычки

  hobby: [], // хобби

  about: '' // что то о себе
}


const fillProfileSteps = [
  {
    name: 'main',
    required: true,
    component: MainProfileInfo
  },
  {
    name: 'goals',
    required: false,
    component: Goals
  },
  {
    name: 'humanQualities',
    required: false,
    component: HumanQualities
  },
  {
    name: 'bestDate',
    required: false,
    component: BestDate
  },
  {
    name: 'hobby',
    required: false,
    component: Hobby
  },
  {
    name: 'zodiacSign',
    required: false,
    component: ZodiacSign
  },
  {
    name: 'orientation',
    required: false,
    component: Orientation
  },
  {
    name: 'badHabits',
    required: false,
    component: BadHabits
  },
  {
    name: 'about',
    required: false,
    component: About
  },
]

const currentStep = ref(fillProfileSteps[0].name)

const stateProfile = reactive({...initialStateProfile})

const changeValueUser = (value) => {
  stateProfile.name = value
}

const changeValueCity = (value) => {
  stateProfile.city = value
}
const changeValueGender = (value) => {
  stateProfile.gender = value
}

const changeValueGenderLooking = (value) => {
  stateProfile.genderLooking = value
}

const nextStep = (index) => {
  //TODO дописать условие на обязательные параметры
  // if (fillProfileSteps[index].required) {
  //
  // }
  currentStep.value = fillProfileSteps[index + 1].name
}

const  skipStep = (index, stepName) => {
  stateProfile[stepName] = initialStateProfile[stepName]
  currentStep.value = fillProfileSteps[index + 1].name
}

</script>

<template>
  <div
    v-for="(step, index) in fillProfileSteps"
    class="dark:text-white"
  >
    <component
      v-if="currentStep === step.name"
      :state-profile="stateProfile"
      :is="step.component"
      @update:name="changeValueUser"
      @update:city="changeValueCity"
      @update:gender="changeValueGender"
      @update:genderLooking="changeValueGenderLooking"
    >
      <div class="flex justify-between mt-3">
        <div>
          <a
            v-if="!step.required" class="p-1 border-b dark:border-white cursor-pointer"
            @click="skipStep(index, step.name)"
          >
            Пропустить
          </a>
        </div>
        <button
          class="dark:bg-white dark:text-black p-1 px-5 rounded-2xl"
          @click="nextStep(index)"
        >
          Сохранить
        </button>
      </div>
    </component>
  </div>
</template>
