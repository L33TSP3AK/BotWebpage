```vue
<script setup>
const props = defineProps({
  bankName: String,
  securityLevel: String,
  accessWindow: String,
  methods: Array,
  successRate: Number
})
</script>

<template>
  <div class="vault-info">
    <div class="info-grid">
      <div class="info-item">
        <span class="label">Security Level</span>
        <span class="value" :class="securityLevel.toLowerCase()">{{ securityLevel }}</span>
      </div>
      <div class="info-item">
        <span class="label">Access Window</span>
        <span class="value">{{ accessWindow }}</span>
      </div>
      <div class="info-item">
        <span class="label">Access Methods</span>
        <div class="tags">
          <span class="tag" v-for="method in methods" :key="method">{{ method }}</span>
        </div>
      </div>
    </div>
    <SuccessMeter :rate="successRate" />
  </div>
</template>

<style scoped>
.vault-info {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid var(--heist-primary);
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.value {
  font-family: monospace;
  color: var(--heist-primary);
}

.value.high { color: var(--heist-secondary); }
.value.medium { color: var(--heist-warning); }
.value.low { color: var(--heist-primary); }

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid var(--heist-primary);
  border-radius: 1rem;
  font-size: 0.8rem;
}
</style>
```