<template>
  <div class="success-meter">
    <div class="meter-track">
      <div class="meter-fill" :style="{ width: rate + '%' }">
        <div class="meter-glow"></div>
      </div>
    </div>
    <span class="meter-label">{{ rate }}% Success</span>
  </div>
</template>

<script setup>
defineProps({
  rate: {
    type: Number,
    required: true
  }
})
</script>

<style scoped>
.success-meter {
  margin: 1rem 0;
}

.meter-track {
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.meter-fill {
  height: 100%;
  background: var(--card-success);
  position: relative;
  transition: width 1s ease;
}

.meter-glow {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 20px;
  background: linear-gradient(90deg, transparent, var(--card-success));
  animation: glowMove 2s infinite;
}

.meter-label {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--card-success);
}

@keyframes glowMove {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>