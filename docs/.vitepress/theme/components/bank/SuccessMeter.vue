```vue
<script setup>
const props = defineProps({
  rate: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    default: '#00ff00'
  }
})
</script>

<template>
  <div class="success-meter">
    <div class="meter-label">
      <span>Success Rate</span>
      <span class="rate">{{ rate }}%</span>
    </div>
    <div class="meter-bar">
      <div 
        class="meter-fill"
        :style="{
          width: `${rate}%`,
          background: color
        }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.success-meter {
  margin: 1rem 0;
}

.meter-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.rate {
  font-weight: bold;
  color: var(--vp-c-brand);
}

.meter-bar {
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.meter-fill {
  height: 100%;
  transition: width 1s ease;
}
</style>
```