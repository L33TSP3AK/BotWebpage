<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const time = ref('00:00:00')
const timer = ref(null)

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  if (timer.value) clearInterval(timer.value)
})

function startTimer() {
  const startTime = Date.now()
  timer.value = setInterval(() => {
    const elapsed = Date.now() - startTime
    const hours = Math.floor(elapsed / 3600000).toString().padStart(2, '0')
    const minutes = Math.floor((elapsed % 3600000) / 60000).toString().padStart(2, '0')
    const seconds = Math.floor((elapsed % 60000) / 1000).toString().padStart(2, '0')
    time.value = `${hours}:${minutes}:${seconds}`
  }, 1000)
}
</script>

<template>
  <div class="heist-timer">
    <div class="timer-label">OPERATION TIME</div>
    <div class="timer-display">{{ time }}</div>
  </div>
</template>

<style scoped>
.heist-timer {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid var(--heist-primary);
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  font-family: monospace;
}

.timer-label {
  color: var(--heist-primary);
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}

.timer-display {
  font-size: 2rem;
  color: var(--heist-primary);
  text-shadow: 0 0 10px var(--heist-primary);
}
</style>