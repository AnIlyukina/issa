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

const changeHobby = (value) => {
  emits("update:values", { prop: "hobby", value });
};
</script>

<template>
  <ul>
    <h3 class="dark:text-white">Чем ты увлекаешься?</h3>
    <u-i-list
      multi
      :list="profileData.hobbyList"
      :state="stateProfile.hobby"
      @update:state="changeHobby"
    />
  </ul>
  <slot></slot>
</template>
