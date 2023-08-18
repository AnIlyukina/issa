<script setup>
const emits = defineEmits(["update:modelValue"]);

import { toRefs } from "vue";

const props = defineProps({
  modelValue: {
    type: Array,
    default: [],
  },
  genderList: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  multi: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: "",
  }
});

const { multi, modelValue } = toRefs(props);

const selectGender = (gender) => {
  let result = [];
  const index = isSelected(gender.id);

  if (!multi.value) {
    result = [];

    if (index === -1) {
      result.push(gender.id);
    }
  } else {
    result = [...modelValue.value];
    if (index !== -1) {
      result.splice(index, 1);
    } else {
      result.push(gender.id);
    }
  }
  emits("update:modelValue", result);
};

const isSelected = (id) => {
  return modelValue.value.findIndex((value) => value === id);
};

const getColor = (gender) => {
  let result = "border border-1 border-black dark:border-white";
  if (isSelected(gender.id) > -1) {
    switch (gender.type) {
      case "female":
        result = "bg-pink-400";
        break;
      case "male":
        result = "bg-blue-300";
        break;
      case "transgender":
        result = "bg-gray-400";
        break;
    }
  }
  return result;
};

const getIconName = (type) => {
  let result = "";
  switch (type) {
    case "female":
      result = "fa-solid fa-venus";
      break;
    case "male":
      result = "fa-solid fa-mars";
      break;
    case "transgender":
      result = "fa-solid fa-transgender";
      break;
  }
  return result;
};
</script>

<template>
  <div>
    <h3 class="dark:text-white">
      {{ label }}
    </h3>
    <ul class="flex h-[70px] justify-around items-center">
      <li
        v-for="gender in genderList"
        class="w-[40px] h-[40px] rounded-2xl cursor-pointer flex items-center justify-center"
        :class="getColor(gender)"
        @click="selectGender(gender)"
      >
        <font-awesome-icon
          size="lg"
          :icon="getIconName(gender.type)"
          class="icon dark:text-white"
        />
      </li>
    </ul>
    <div class="h-[20px]">
      <span
        v-show="error"
        class="block font-bold text-[13px] text-red-500 text-center"
      >
        {{ error }}
      </span>
      </div>
  </div>
</template>

<style scoped></style>
