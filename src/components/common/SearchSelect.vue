<script setup>
import {ref, toRefs} from 'vue';

import debounce from 'lodash.debounce'

import api from '../../api/api';
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: Number,
    default: null
  },
  apiUrl: {
    type: String,
    required: true,
  },
  error: {
    type: String,
    default: "",
  }
})

const { apiUrl } = toRefs(props)

const options = ref([])

const onSearch = (search, loading) => {
  if (search.length) {
    loading(true)
    getCity(loading, search)
  }
}

const changeValue = (selected) => {
  emits('update:modelValue', selected)
}

const getCity = debounce (async (loading, search, vm) =>
  {
    try {
      const response = await api.get(apiUrl.value + search)
      options.value = response.data
    } catch (e) {
      console.log(e)
    } finally {
      loading(false)
    }
  }, 500)

</script>

<template>
  <div class="relative">
    <v-select
      :value="modelValue"
      :options='options'
      class="search-select"
      label="name"
      placeholder="Введите ваш город"
      @search="onSearch"
      @option:selected="changeValue"
    >
      <template #no-options="{ search, searching, loading } ">
        <div>
          Результатов нет
        </div>
      </template>
      <template #option="{ name }">
        {{ name }}
      </template>
    </v-select>
    <div class="absolute w-[100%] top-[45px]">
      <span
        v-show="error"
        class="block font-bold text-[13px] text-red-500 text-center"
      >
        {{ error }}
      </span>
      </div>
  </div>
</template>

<style>
.search-select{
  margin-bottom: 30px;

  --vs-dropdown-bg: transperent;

  /* --vs-dropdown-color: #000000;
  --vs-dropdown-option-color: #000000; */

  --vs-selected-bg: #664cc3;
  border-bottom: 2px solid white;
  /* --vs-selected-color: rgb(0, 0, 0);; */
/*
  --vs-search-input-color: rgb(0, 0, 0); */

  --vs-border-color: none;
  --vs-dropdown-option--active-bg: rgb(173, 162, 162);
  --vs-dropdown-option--active-color: #eeeeee;
}

.vs__selected-options input,
.vs__selected-options input:focus{
  padding: 5px;
}
</style>
