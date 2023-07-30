<script setup>
import { computed } from 'vue';
import AuthLayouts from '../src/layouts/AuthLayouts.vue';
import MainLayouts from '../src/layouts/MainLayouts.vue';

import { useAuthStore } from '../src/stores/auth';
import { storeToRefs } from 'pinia'

const store = useAuthStore();

const { isAuth } = storeToRefs(store)

const currentLayouts = computed(() => isAuth.value ? MainLayouts : AuthLayouts)

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
