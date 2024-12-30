<template>
  <div class="status-indicator">
    <span class="label">{{ label }}</span>
    <div class="value-container">
      <span class="status-dot"></span>
      <span class="value">{{ value }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: String
})
</script>

<style scoped>
.status-indicator {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--card-primary);
  border-radius: 0.5rem;
}

.label {
  color: var(--card-text);
  font-size: 0.9rem;
  opacity: 0.7;
}

.value-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: var(--card-primary);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.value {
  color: var(--card-primary);
  font-weight: bold;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
</style>