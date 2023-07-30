<script setup>
import UIMenuItem from '../../src/components/UI/UIMenuItem.vue'
import UIMenuToggle from '../../src/components/UI/UIMenuToggle.vue'

import { ref } from 'vue'


let isMenuActive = ref(false)
const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value
}
</script>

<template>
  <section class="h-[100vh] bg-[#14161e] relative">
    <u-i-menu-toggle :is-menu-active="isMenuActive" @toggleMenu="toggleMenu"/>
    <div
      class="sidebar absolute w-[80px] h-[100vh] bg-[#fff] pl-[10px] overflow-hidden pl-[10px]"
      :class="[isMenuActive ? 'active' : '']"
    >
      <ul class="relative h-[100vh]">
        <li class="font-bold text-[2em] mb-[50px]"> <h1> LOGO </h1> </li>
        <div>
          <u-i-menu-item
            :name-icon="'fa-solid fa-house'"
            :name-item="'Home'"
            :bg-color="'#f44336'"
            :is-menu-active="isMenuActive"
          />
          <u-i-menu-item
            :name-icon="'fa-solid fa-user'"
            :name-item="'Profile'"
            :bg-color="'#ffa117'"
            :is-menu-active="isMenuActive"
          />
          <u-i-menu-item
            :name-icon="'fa-solid fa-comment'"
            :name-item="'Chats'"
            :bg-color="'#0fc70f'"
            :is-menu-active="isMenuActive"
          />
          <u-i-menu-item
            :name-icon="'fa-solid fa-gear'"
            :name-item="'Settings'"
            :bg-color="'#e91e63'"
            :is-menu-active="isMenuActive"
          />

        </div>

        <div class="absolute bottom-[0] w-[100%]">
          <u-i-menu-item
            :type="'user-photo'"
            :bg-color="'#333'"
          />
          <u-i-menu-item
            :name-icon="'fa-solid fa-right-from-bracket'"
            :name-item="'Logout'"
            :bg-color="'#333'"
            :is-menu-active="isMenuActive"
          />
        </div>
      </ul>
    </div>

  </section>

</template>


<style scoped>
.sidebar {
  transition: .5s;
}
.sidebar.active {
  width: 300px;
}

</style>
