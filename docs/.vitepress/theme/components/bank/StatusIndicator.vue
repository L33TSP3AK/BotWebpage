```vue
<script setup>
const props = defineProps({
  status: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'info'
  }
})
</script>

<template>
  <div class="status-indicator" :class="type">
    <div class="status-dot"></div>
    <span class="status-text">{{ status }}</span>
  </div>
</template>

<style scoped>
.status-indicator {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: statusPulse 2s infinite;
}

.info .status-dot { background: #00e5ff; }
.success .status-dot { background: #00ff00; }
.warning .status-dot { background: #ffff00; }
.error .status-dot { background: #ff0000; }

@keyframes statusPulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}
</style>
```