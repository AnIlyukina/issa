<script setup>

const changeProfileImage = (event) => {
  console.log(event, 'event');
}

</script>

<template>
  <div class="dark:text-white ">
    <img
      src="../../../src/assets/images/unknown-person.jpg"
      class="w-[150px] h-[150px] rounded-full m-auto"
    >
    <label
      for="input-file"
      class="
        block
        w-[200px]
        bg-[#e3362c]
        p-[12px]
        m-auto
        my-[30px]
        text-center
        rounded-xl
        cursor-pointer
      "
    >
      Загрузить Фото
    </label>
    <input
      id="input-file"
      type="file"
      accept="image/jpeg image/png image/jpg"
      class="hidden"
      @change="changeProfileImage"
    >
  </div>
</template>
