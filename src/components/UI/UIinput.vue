<script setup>
defineProps({
  label: String,
  type: String,
  iconName: String
})


</script>

<template>
  <div
    class="
      input-box
      relative
      my-[30px]
      border-b-2
      border-black
      dark:border-white
    "
  >
    <span
      class="
        absolute
        right-[8px]
        dark:text-white
        text-[1.2em]
        top-[18px]
      ">
        <font-awesome-icon :icon="iconName" class="icon"/>
    </span>
    <input class="pr-[35px] pl-[5px] w-[100%] h-[50px] bg-transparent outline-none  dark:text-white" :type="type" required/>
    <label class="absolute top-[50%] left-[5px] translate-y-[-50%] dark:text-white pointer-events-none">{{ label }}</label>
  </div>
</template>

<style>
.input-box label {
  transition: top .5s;
}

.input-box input:focus~label,
.input-box input:valid~label {
  top: -5px;
}
</style>
