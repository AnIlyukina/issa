<script setup>
import UIInput from "../UI/UIinput.vue";
import SelectGender from "./SelectGender.vue";

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

const changeValueCity = (selected) => {
  emits("update:values", { prop: "city", value: selected.id });
};

const changeValueGender = (value) => {
  emits("update:values", { prop: "gender", value });
};

const changeValueGenderLooking = (value) => {
  emits("update:values", { prop: "genderLooking", value });
};

const fetchOptions = (value) => {
  console.log(value, 'fetchOptions')
}
</script>

<template>
  <ul>
    <u-i-input
      v-model="stateProfile.name"
      :type="'text'"
      :label="'Ваше имя'"
      @update:modelValue="changeValueName"
    />
    <v-select
      class="select-city"
      placeholder="Введите ваш город"
      :options='profileData.cityList'
      label="name" :filterable="false" 
      @search="fetchOptions"
      @option:selected="changeValueCity"
    >
      <template #no-options="{ search, searching, loading } ">
        Введите ваш город для поиска
      </template>
      <template #option="{ name }">
        {{ name }}
      </template>
    </v-select>
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

<style>
.select-city{
  margin-bottom: 30px;
  --vs-controls-color: rgb(0, 0, 0);
  --vs-border-color: rgb(0, 0, 0);

  --vs-dropdown-bg: #282c34;
  --vs-dropdown-color: #cc99cd;
  --vs-dropdown-option-color: #cc99cd;

  --vs-selected-bg: #664cc3;
  --vs-selected-color: rgb(0, 0, 0);;

  --vs-search-input-color: rgb(0, 0, 0);

  --vs-dropdown-option--active-bg: #664cc3;
  --vs-dropdown-option--active-color: #eeeeee;
}

</style>