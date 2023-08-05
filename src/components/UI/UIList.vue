<script setup>
import { toRefs } from "vue";

const emits = defineEmits(["update:state"]);

const props = defineProps({
  state: {
    type: Array,
    default: () => [],
  },
  multi: {
    type: Boolean,
    default: false,
  },
  list: {
    type: Array,
    required: true,
  },
});

const { multi, state } = toRefs(props);

const selectItem = (item) => {
  let result = [];
  const index = isSelected(item.id);

  if (!multi.value) {
    result = [];

    if (index === -1) {
      result.push(item.id);
    }
  } else {
    result = [...state.value];
    if (index !== -1) {
      result.splice(index, 1);
    } else {
      result.push(item.id);
    }
  }
  emits("update:state", result);
};

const isSelected = (id) => {
  return state.value.findIndex((value) => value === id);
};
</script>

<template>
  <li v-for="item in list" class="flex gap-4 mt-5">
    <div
      class="w-[25px] h-[25px] border border-1 border-black dark:border-white rounded"
      :class="[isSelected(item.id) > -1 ? 'dark:bg-white' : '']"
      @click="selectItem(item)"
    />
    <span>{{ item.name }}</span>
  </li>
</template>
