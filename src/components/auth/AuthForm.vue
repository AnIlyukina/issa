<script setup>
defineProps({
  formName: String,
  type: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['submitForm'])

const onSubmitForm = () => {
  emits('submitForm')
}

</script>

<template>
  <div
    class="
      sm:border-2 sm:h-fit sm:p-[30px] sm:border-[rgba(255, 255, 255, .5)]
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
    :class="[type === 'questionnaire' ? 'sm:w-[800px]' : 'xs:w-[400px]']"
  >
    <form
      class="w-[100%]"
      novalidate
      @submit.prevent="onSubmitForm"
      >
      <h2 class="
        text-[2em]
        font-bold
        mb-[30px]
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
