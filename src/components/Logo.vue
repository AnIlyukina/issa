<template>
  <div class="card ball-bouncing">
    <div class="ball"></div>
    <span class="logo-text">pen heart</span>
  </div>
</template>

<style scoped>
.card {
  position: absolute;
  bottom: 1rem;
  left: 1em;
}

.logo-text {
  position: absolute;
  color: #fff;
  width: fit-content;
  font-weight: 600;
  left: 55px;
  bottom: 25px;
}

.ball {
  background-color: #fff;
  border-radius: 50%;
  height: 3rem;
  position: absolute;
  width: 3rem;
}
.ball-bouncing {
  background-color: #fff;
}

.ball-bouncing::before {
  animation: shadowBouncing 1.2s ease-in infinite;
  animation-iteration-count: 3;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  content: "";
  height: 0.15rem;
  width: 2rem;
}

.ball-bouncing .ball {
  animation: ballBouncing 1.2s ease-in infinite;
  animation-iteration-count: 3;
  bottom: 2.1rem;
  transform-origin: bottom;
}

@keyframes ballBouncing {
  0%,
  100% {
    transform: scale(1.5, 0.5);
  }
  20% {
    transform: scaleY(1.2);
  }
  40%,
  80% {
    transform: translateY(-14rem);
  }
  70% {
    transform: translateY(-15rem);
  }
  90% {
    transform: translateY(0);
  }
}

@keyframes shadowBouncing {
  0%,
  100% {
    transform: scale(2, 0.8);
  }
  20% {
    transform: scale(1.2, 0.8);
  }
  40%,
  80% {
    transform: scale(0.5, 0.2);
  }
  70% {
    transform: scale(0.5, 0.15);
  }
  90% {
    transform: scale(1.5, 0.6);
  }
}
/* End ball bouncing */
</style>
