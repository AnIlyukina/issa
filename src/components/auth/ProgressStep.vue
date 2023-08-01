<script setup>

defineProps({
  currentStep: {
    type: Number,
    requared: true
  }
})

const steps = [
  {
    id: 1,
    name: 'Знакомимся'
  },
  {
    id: 2,
    name: 'Заполнение анкеты'
  },
  {
    id: 3,
    name: 'Загрузка фото'
  },

]


</script>

<template>
  <ul class="progress-steps__list">
    <li
      v-for="step in steps"
      class="progress-step__item"
      :class="[currentStep === step.id ? 'current-item' : '']"
    >
      <span class="progress-count">{{ step.id }}</span>
      <span class="progress-label">{{ step.name}}</span>
    </li>
  </ul>
</template>

<style scoped>
.progress-steps__list {
  box-shadow: 0 15px 25px rgba(0,0,0,0,1);
  color: #333;
  border-radius: 10px;
  display: flex;
  padding: 20px 10px;
  position: relative;
  z-index:10px;
  width: 100%;
}

.progress-step__item{
  color:white;
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

.progress-step__item + .progress-step__item:after {
  content: '';
  position: absolute;
  left: 0;
  top: 19px;
  background-color: #ffb8fe;
  width: 85%;
  height: 2px;
  transform: translateX(-50%);
  z-index: 1;
}
.progress-count {
  height: 40px;
  width: 40px;
  display: flex;
  align-items:center;
  justify-content: center;
  border-radius:50%;
  font-weight: 600;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  color: transparent;
}

.progress-count:before {
  content: '';
  height: 10px;
  width: 20px;
  background: #ffb8fe;
  border-left: 3px solid #fff;
  border-bottom: 3px solid #fff;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -60%) rotate(-45deg);
  transform-origin: center center;
  z-index: 2;
}

.progress-count:after {
  content: '';
  height: 40px;
  width: 40px;
  background-color: #ffb8fe;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 1;
}

.progress-label {
  font-size: 13px;
  font-weight: 400;
  margin-top: 10px;
}

.current-item .progress-count:before,
.current-item ~ .progress-step__item .progress-count:before{
  display: none;
}

.current-item ~ .progress-step__item .progress-count:after{
  height:10px;
  width:10px;
}
ß
.current-item ~ .progress-step__item .progress-label{
  opacity: 0.5;
}

.current-item .progress-count:after{
    background: transparent;
    border: 2px solid #ffb8fe;
}
.current-item .progress-count{
    color: #ffb8fe;
}

</style>
