<script setup>
const emits = defineEmits(["update:modelValue"]);

defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    required: true,
  },
  iconName: {
    type: String,
    default: "",
  },
  error: {
    type: String,
    default: "",
  },
});

const changeValue = (event) => {
  emits("update:modelValue", event.target.value);
};
</script>

<template>
  <div class="input-box relative border-b-2 border-black dark:border-white">
    <span
      v-if="iconName"
      class="absolute right-[8px] dark:text-white text-[1.2em] top-[18px]"
    >
      <font-awesome-icon :icon="iconName" class="icon" />
    </span>
    <input
      :value="modelValue"
      class="pr-[35px] pl-[5px] w-[100%] h-[50px] bg-transparent outline-none dark:text-white"
      :type="type"
      required
      @input="changeValue"
    />
    <label
      class="absolute top-[50%] left-[5px] translate-y-[-50%] dark:text-white pointer-events-none"
      >{{ label }}</label
    >
  </div>
  <div class="h-[30px]">
    <span
      v-show="error"
      class="block font-bold text-[13px] text-red-500 text-center"
    >
      {{ error }}
    </span>
  </div>
</template>

<style scoped>
.input-box label {
  transition: top 0.5s;
}

.input-box input:-webkit-autofill,
.input-box input:-webkit-autofill:hover,
.input-box input:-webkit-autofill:focus,
.input-box input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: #fff !important;
  background: #fff;
}
.input-box input:focus ~ label,
.input-box input:valid ~ label,
.input-box input:-webkit-autofill ~ label {
  top: -5px;
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}
</style>
