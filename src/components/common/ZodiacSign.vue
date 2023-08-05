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

const changeZodiacSign = (value) => {
  emits("update:values", { prop: "zodiacSign", value });
};
</script>

<template>
  <ul>
    <h3 class="dark:text-white">Кто ты по знаку зодиака?</h3>
    <u-i-list
      :list="profileData.zodiacSignList"
      :state="stateProfile.zodiacSign"
      @update:state="changeZodiacSign"
    />
  </ul>
  <slot></slot>
</template>
