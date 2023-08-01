<script setup>

</script>

<template>
  <div class="progress-steps">
    <ul class="progress-steps-list">
      <li class="progress-step-item">
        <span class="progress-count">1</span>
        <span class="progress-label">Знакомимся</span>
      </li>
      <li class="progress-step-item">
        <span class="progress-count">2</span>
        <span class="progress-label">Заполнение анкеты</span>
      </li>
      <li class="progress-step-item">
        <span class="progress-count">1</span>
        <span class="progress-label">Загрузка фото</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>

/*.progress-steps {*/
/*  background-color: #21d4fd;*/
/*  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);*/
/*  width: 100%;*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*}*/

.progress-steps-list {
  background: #fff;
  box-shadow: 0 15px 25px rgba(0,0,0,0,1);
  color: #333;
  border-radius: 10px;
  display: flex;
  padding: 20px 10px;
  position: relative;
  z-index:10px;
  width: 100%;
}

.progress-step-item{
  padding: 0 20px;
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 170px;
  position: relative;
}

.progress-step-item + .progress-step-item:after {
  content: '';
  position: absolute;
  left: 0;
  top: 19px;
  background-color: #21d4fd;
  width: 100%;
  height: 2px;
  transform: translateX(-50%);
  /*z-index: -10;*/
}
</style>
