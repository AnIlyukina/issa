<script setup>

import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

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
    <cropper
      class="cropper"
      src="https://images.unsplash.com/photo-1600984575359-310ae7b6bdf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
      :stencil-props="{
        aspectRatio: 10/12
      }"
      @change="change"
    />
  </div>
</template>
