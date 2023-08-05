<script setup>
const emits = defineEmits(["update:values"]);

const changeAbout = (event) => {
  emits("update:values", { prop: "about", value: event.target.value });
};
</script>

<template>
  <ul>
    <h3 class="dark:text-white">
      Здесь можешь написать что-нибудь от себя более подробно ;)
    </h3>
    <textarea
      class="bg-transparent w-[100%] mt-3 p-2 border-2 rounded dark:border-white"
      @input="changeAbout"
    >
    </textarea>
  </ul>
  <slot></slot>
</template>
