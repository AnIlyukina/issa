<script setup>
defineProps({
  nameItem: String,
  bgColor: String,
  nameIcon:String,
})

</script>
<template>
  <li class="relative">
    <a href="#" class="relative flex whitespace-nowrap ">
      <div v-if="nameIcon"  class="relative flex justify-center items-center min-w-[60px] h-[70px] text-[1.5em] transition-[.5s]" ><font-awesome-icon class="text-[#333]" :icon="nameIcon"/></div>
      <div v-if="nameItem" class="relative h-[70px] flex items-center text-[#333] pl-[15px] uppercase tracking-wider transition-[.5s] ">{{ nameItem }}</div>
      <div v-else>
        <img src="../../../src/assets/images/avatar.jpeg"/>
      </div>
    </a>
  </li>
</template>

<style scoped>

</style>
