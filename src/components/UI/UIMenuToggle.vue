<script setup>
import { toRefs } from "vue";

const props = defineProps({
  isMenuActive: {
    type: Boolean,
    required: true,
  },
});

const { isMenuActive } = toRefs(props);
const emit = defineEmits(["toggleMenu"]);
const toggleMenu = () => {
  emit("toggleMenu");
};
</script>

<template>
  <div
    class="menu-toggle absolute top-[20px] right-[20px] w-[50px] h-[50px] bg-[#31f4ff] z-50 cursor-pointer flex justify-center items-center"
    :class="[isMenuActive ? 'active' : '']"
    @click="toggleMenu"
  ></div>
</template>

<style scoped>
.menu-toggle::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 3px;
  background: #fff;
  transform: translateY(-9px);
  transition: 0.5s;
  box-shadow: 0 9px 0 #fff;
}

.menu-toggle::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 3px;
  background: #fff;
  transform: translateY(9px);
  transition: 0.5s;
}
.menu-toggle.active::before {
  transform: translateY(0px) rotate(45deg);
  box-shadow: 0 0 0 #fff;
}

.menu-toggle.active::after {
  transform: translateY(0px) rotate(-45deg);
}
</style>
