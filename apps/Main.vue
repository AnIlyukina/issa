<script setup>
import { shallowRef } from 'vue';
import AuthLayouts from '../src/layouts/AuthLayouts.vue'
import MainLayouts from '../src/layouts/MainLayouts.vue';

const currentLayouts = shallowRef(MainLayouts)

</script>

<template>
  <component
    :is="currentLayouts"
  >
    <router-view></router-view>
  </component>
</template>

<style scoped>
</style>
