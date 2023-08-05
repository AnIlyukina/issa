<script setup>
const emits = defineEmits(['update:modelValue'])

import { toRefs } from 'vue';

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
    color: 'bg-pink-400',
    icon: 'fa-solid fa-venus'
  },
  {
    id: 2,
    name: 'male',
    color: 'bg-blue-300',
    icon: 'fa-solid fa-mars'
  },
  {
    id: 3,
    name: 'others',
    color: 'bg-gray-400',
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
    <h3 class="dark:text-white">
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
        :class="isSelected(gender.id) === -1 ? 'border border-1 border-black dark:border-white' : `${gender.color}`"
        @click="selectGender(gender)"
      >
         <span
           v-if="gender.icon"
         >
          <font-awesome-icon size="lg" :icon="gender.icon" class="icon dark:text-white"/>
        </span>

      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>

