<script setup>

</script>

<template>
  <section class="
    main-anim
    flex
    bg-auth-white
    dark:bg-auth-dark2
    w-[100%]
    bg-center
    h-[100vh]
    bg-cover
    bg-no-repeat
    "
    >
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </section>
</template>

<style scoped>
</style>
