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

const changeHumanQualities = (value) => {
  emits("update:values", { prop: "humanQualities", value });
};
</script>

<template>
  <ul>
    <h3 class="dark:text-white">Что в людях ты ценишь больше всего?</h3>
    <u-i-list
      :list="profileData.humanQualitiesList"
      :state="stateProfile.humanQualities"
      multi
      @update:state="changeHumanQualities"
    />
  </ul>
  <slot></slot>
</template>
