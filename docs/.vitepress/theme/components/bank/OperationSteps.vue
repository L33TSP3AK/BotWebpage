```vue
<script setup>
const props = defineProps({
  steps: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="operation-steps">
    <div v-for="(step, index) in steps" :key="index" class="step">
      <div class="step-number">{{ String(index + 1).padStart(2, '0') }}</div>
      <div class="step-content">
        <h3>{{ step.title }}</h3>
        <ul class="step-list">
          <li v-for="(item, i) in step.items" :key="i">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.operation-steps {
  display: grid;
  gap: 1.5rem;
}

.step {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--heist-primary);
  border-radius: 0.5rem;
}

.step-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--heist-primary);
  font-family: monospace;
}

.step-list {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 0;
}

.step-list li {
  padding: 0.25rem 0;
  color: var(--vp-c-text-2);
  font-family: monospace;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.step-list li::before {
  content: '>';
  color: var(--heist-primary);
}
</style>
```