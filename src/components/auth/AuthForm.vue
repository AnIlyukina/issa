<script setup>
defineProps({
  formName: String
})

</script>

<template>
  <div
    class="
      xs:border-2 xs:w-[400px] xs:h-fit xs:p-[30px] xs:border-[rgba(255, 255, 255, .5)]
      bg-transparent
      backdrop-blur-md
      m-auto
      relative
      rounded-3xl
      flex justify-center
      items-center
      w-[100%]
      h-[100vh]
      p-[15px]"
  >
    <form class="w-[100%]">
      <h2 class="
        text-[2em]
        font-bold
        dark:text-white
        text-center"
      >
        {{ formName }}
      </h2>

      <slot></slot>

    </form>
  </div>

</template>

<style scoped>

</style>
