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

const changeBestDate = (value) => {
  emits("update:values", { prop: "bestDate", value });
};
</script>

<template>
  <ul>
    <h3 class="dark:text-white">Какое свидание ты выберешь?</h3>
    <u-i-list
      :list="profileData.bestDateList"
      :state="stateProfile.bestDate"
      @update:state="changeBestDate"
    />
  </ul>
  <slot></slot>
</template>
