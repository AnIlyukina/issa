<script setup>
defineProps({
  type: String,
  name: String
})

</script>

<template>
  <button
    class="
          w-[100%]
          h-[40px]
          bg-white
          rounded-3xl
          font-medium
        "
    :type="type"
  >
    {{ name }}
  </button>
</template>
