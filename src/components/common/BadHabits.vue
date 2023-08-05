<script setup>
import UIList from "../UI/UIList.vue";

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

const changeBadHabbit = (value) => {
  emits("update:values", { prop: "badHabbit", value });
};
</script>

<template>
  <ul>
    <h3 class="dark:text-white">Твоя ориентация?</h3>
    <u-i-list
      :list="profileData.badHabbitList"
      :state="stateProfile.badHabbit"
      @update:state="changeBadHabbit"
    />
  </ul>
  <slot></slot>
</template>
