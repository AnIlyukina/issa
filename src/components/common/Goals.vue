<script setup>
const emits = defineEmits(['update:goal'])
import {toRefs} from 'vue';

const props = defineProps({
  stateProfile: {
    type: Array,
    default: () => [],
  }
})

const goals = [
  {
    id: 1,
    name: 'Отношения'
  },
  {
    id: 2,
    name: 'Друзья'
  },
  {
    id: 3,
    name: 'Секс'
  }
]

const multi = false

const { stateProfile } = toRefs(props)
console.log( multi.value, stateProfile);

const selectGoals = (goal) => {
  let result = []
  const index = isSelected(goal.id)

  if (!multi.value) {
    result = []

    if (index === -1) {
      result.push(goal.id)
    }
  } else {
    result = [...stateProfile.value.goal]
    if (index !== -1) {
      result.splice(index, 1)
    } else {
      result.push(goal.id)
    }
  }
  emits('update:goal', result)
}


const isSelected = (id) => {
  console.log(stateProfile.goals, 'stateProfile.goals');
  return stateProfile.value.goal.findIndex(value => value === id)
}

</script>

<template>
  <ul>
    <h3 class="dark:text-white">
      Какие цели ты преследуешь?
    </h3>
    <li
      v-for="goal in goals"
      class="flex gap-4 mt-5"
    >
      <div
        class="w-[25px] h-[25px] border border-1 border-black dark:border-white rounded"
        @click="selectGoals(goal)"
      />
      <span>{{ goal.name }}</span>
    </li>
  </ul>
  <slot></slot>
</template>
