<script setup>
import UIInput from "../UI/UIinput.vue";
import SelectGender from "./SelectGender.vue";
import SearchSelect from "../common/SearchSelect.vue"

const emits = defineEmits(["update:values"]);

defineProps({
  profileData: {
    type: Object,
    required: true,
  },
  stateError: {
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

const changeValueCity = (selected) => {
  emits("update:values", { prop: "city", value: selected.id });
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
      :error="stateError.name"
      @update:modelValue="changeValueName"
    />
    <search-select
      v-model="stateProfile.city"
      api-url="'/city?city='"
      :error="stateError.city"
      @update:modelValue="changeValueCity"
    />
    <select-gender
      v-model="stateProfile.gender"
      :gender-list="profileData.genderList"
      :label="'Выбере ваш пол:'"
      :error="stateError.gender"
      @update:modelValue="changeValueGender"
    />
    <select-gender
      v-model="stateProfile.genderLooking"
      :multi="true"
      :gender-list="profileData.genderList"
      :label="'Кто вам интересен:'"
      :error="stateError.genderLooking"
      @update:modelValue="changeValueGenderLooking"
    />
    <slot></slot>
  </ul>
</template>
