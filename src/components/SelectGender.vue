<script setup>
const emits = defineEmits(['update:modelValue'])

import {reactive, toRefs} from 'vue';

const props = defineProps({
  modelValue: {
    type: Array,
    default: []
  },
  label: {
    type: String,
    default: ''
  },
  multi: {
    type: Boolean,
    default: false
  }
})

const { multi, modelValue } = toRefs(props)

const genders = [
  {
    id: 1,
    name: 'female',
    color: 'pink',
    icon: 'fa-solid fa-venus'
  },
  {
    id: 2,
    name: 'male',
    color: 'blue',
    icon: 'fa-solid fa-mars'
  },
  {
    id: 3,
    name: 'others',
    color: 'gray',
    icon: 'fa-solid fa-transgender'
  }
]


const selectGender = (gender) => {
  let result = []
  const index = isSelected(gender.id)

  if (!multi.value) {
    result = []

    if (index === -1) {
      result.push(gender.id)
    }
  } else {
    result = [...modelValue.value]
    if (index !== -1) {
      result.splice(index, 1)
    } else {
      result.push(gender.id)
    }
  }
  emits('update:modelValue', result)
}

const isSelected = (id) => {
  return modelValue.value.findIndex(value => value === id)
}



</script>

<template>
  <div>
    <h3>
      {{ label }}
    </h3>
    <ul class="flex h-[70px] justify-around items-center">
      <li
        v-for="gender in genders"
        class="
          w-[40px] h-[40px]
          rounded-2xl cursor-pointer
          flex items-center justify-center
        "
        :class="isSelected(gender.id) !== -1 ? 'bg-red-800' : `bg-${gender.color}-400`"
        @click="selectGender(gender)"
      >
         <span
           v-if="gender.icon"
         >
          <font-awesome-icon size="lg" :icon="gender.icon" class="icon"/>
        </span>

      </li>
    </ul>
  </div>
</template>

