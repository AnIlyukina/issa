<script setup>

// import {toRefs} from 'vue';

defineProps({
  nameItem: String,
  bgColor: String,
  nameIcon: String,
  isMenuActive: Boolean
})

</script>
<template>
  <li
    class="relative"
    :class="[!isMenuActive ? 'active' : '']"
    :style="`--bg:${bgColor}`">
    <a href="#" class="relative flex whitespace-nowrap ">
      <div v-if="nameIcon"  class="icon relative flex justify-center items-center min-w-[60px] h-[70px] text-[1.5em] transition-[.5s]" ><font-awesome-icon class="text-red" :icon="nameIcon"/></div>
      <p v-if="nameItem" class="relative h-[70px] flex items-center pl-[15px] uppercase tracking-wider transition-[.5s] ">{{ nameItem }}</p>
      <div v-else>
        <div class="flex justify-center items-center">
          <img class="relative w-[50px] h-[50px] rounded-[50%]" src="../../../src/assets/images/avatar.jpeg"/>
          <span class="pl-2">Анна Илюкина</span>
        </div>
      </div>
    </a>
  </li>
</template>

<style scoped>

li:hover a .icon,
li:hover a p{
  color:var(--bg);
}
li.active{
  background: var(--bg);
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}

</style>
