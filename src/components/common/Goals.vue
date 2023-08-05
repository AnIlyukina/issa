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

const changeGoal = (value) => {
  emits("update:values", { prop: "goal", value });
};
</script>

<template>
  <ul>
    <h3 class="dark:text-white">Какие цели ты преследуешь?</h3>
    <u-i-list
      :list="profileData.goalList"
      :state="stateProfile.goal"
      @update:state="changeGoal"
    />
  </ul>
  <slot></slot>
</template>
