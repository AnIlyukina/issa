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

const changeOrientation = (value) => {
  emits("update:values", { prop: "orientation", value });
};
</script>

<template>
  <ul>
    <h3 class="dark:text-white">Твоя ориентация?</h3>
    <u-i-list
      :list="profileData.orientationList"
      :state="stateProfile.orientation"
      @update:state="changeOrientation"
    />
  </ul>
  <slot></slot>
</template>
