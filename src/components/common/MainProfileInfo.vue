<script setup>
import UIInput from "../UI/UIinput.vue";
import SelectGender from "./SelectGender.vue";

import Multiselect from '@vueform/multiselect'

const emits = defineEmits(["update:values"]);

defineProps({
  profileData: {
    type: Object,
    required: true,
  },
  stateProfile: {
    type: Object,
    required: true,
  },
});

const changeValueName = (value) => {
  emits("update:values", { prop: "name", value });
};

const changeValueCity = (value) => {
  emits("update:values", { prop: "city", value });
};

const changeValueGender = (value) => {
  emits("update:values", { prop: "gender", value });
};

const changeValueGenderLooking = (value) => {
  emits("update:values", { prop: "genderLooking", value });
};
</script>

<template>
  <ul>
    <u-i-input
      v-model="stateProfile.name"
      :type="'text'"
      :label="'Ваше имя'"
      @update:modelValue="changeValueName"
    />
    <Multiselect
      v-model="stateProfile.city"
      :options="profileData.cityList"
    />
    <select-gender
      v-model="stateProfile.gender"
      :gender-list="profileData.genderList"
      :label="'Выбере ваш пол:'"
      @update:modelValue="changeValueGender"
    />
    <select-gender
      v-model="stateProfile.genderLooking"
      :multi="true"
      :gender-list="profileData.genderList"
      :label="'Кто вам интересен:'"
      @update:modelValue="changeValueGenderLooking"
    />
    <slot></slot>
  </ul>
</template>

<style src="@vueform/multiselect/themes/default.css"></style>
