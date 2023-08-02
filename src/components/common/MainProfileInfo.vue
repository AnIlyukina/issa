<script setup>
import UIInput from '../UI/UIinput.vue';
import SelectGender from '../SelectGender.vue';

const emits = defineEmits(['update:name', 'update:city', 'update:gender', 'update:genderLooking']);

defineProps({
  stateProfile: {
    type: Object,
    required: true
  }
})
// const submitMainInfo = () => {
//   console.log('submit')
//   emits('update:mainInfo', mainInfo)
// }

const changeValueUser = (value) => {
  emits('update:name', value)
}

const changeValueCity = (value) => {
  emits('update:city', value)
}

const changeValueGender = (value) => {
  emits('update:gender', value)
}

const changeValueGenderLooking = (value) => {
  emits('update:genderLooking', value)
}

</script>

<template>
  <ul>
    <u-i-input
      v-model="stateProfile.name"
      :type="'text'"
      :label="'Ваше имя'"
      @update:modelValue="changeValueUser"
    />
    <u-i-input
      v-model="stateProfile.city"
      :type="'text'"
      :label="'Где вы находитесь?'"
      @update:modelValue="changeValueCity"
    />
    <select-gender
      v-model="stateProfile.gender"
      :label="'Выбере ваш пол:'"
      @update:modelValue="changeValueGender"
    />
    <select-gender
      v-model="stateProfile.genderLooking"
      :multi="true"
      :label="'Кто вам интересен:'"
      @update:modelValue="changeValueGenderLooking"
    />
    <slot></slot>
  </ul>
</template>

<style scoped>

</style>
