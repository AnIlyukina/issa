<script setup>
import UIMenuItem from '../../src/components/UI/UIMenuItem.vue'


</script>

<template>
  <section class="h-[100vh] bg-[#14161e]">
    <div class="absolute w-[300px] h-[100vh] bg-[#fff] transition-[.5s] pl-[10px]">
      <ul class="relative h-[100vh]">
<!--        <u-i-menu-item-->
<!--          class="mb-[50px]"-->
<!--          :name-icon="'fa-brands fa-apple'"-->
<!--          :name-item="'WebsiteLogo'"-->
<!--          :bg-color="'#333'"-->
<!--        />-->
        <li class="font-bold text-[2em] mb-[50px]"> <h1> LOGO </h1> </li>
        <div>
          <u-i-menu-item
            :name-icon="'fa-solid fa-house'"
            :name-item="'Home'"
            :bg-color="'#f44336'"
          />
          <u-i-menu-item
            :name-icon="'fa-solid fa-user'"
            :name-item="'Profile'"
            :bg-color="'#ffa117'"
          />
          <u-i-menu-item
            :name-icon="'fa-solid fa-comment'"
            :name-item="'Chats'"
            :bg-color="'#0fc70f'"
          />
          <u-i-menu-item
            :name-icon="'fa-solid fa-gear'"
            :name-item="'Settings'"
            :bg-color="'#e91e63'"
          />

        </div>

        <div>
          <u-i-menu-item
            :type="'user-photo'"
            :bg-color="'#333'"
          />
          <u-i-menu-item
            :name-icon="'fa-solid fa-right-from-bracket'"
            :name-item="'Logout'"
            :bg-color="'#333'"
          />
        </div>
      </ul>

    </div>

  </section>

</template>


<style scoped>

</style>
