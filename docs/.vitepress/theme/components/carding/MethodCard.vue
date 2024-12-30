<template>
  <div class="method-card" :class="type">
    <div class="card-header">
      <span class="method-icon">{{ icon }}</span>
      <h3>{{ title }}</h3>
      <div class="method-status">{{ status }}</div>
    </div>
    <div class="success-meter">
      <div class="meter-bar" :style="{ width: successRate + '%' }"></div>
      <span class="meter-text">{{ successRate }}% Success</span>
    </div>
    <ul class="feature-list">
      <li v-for="feature in features" :key="feature">{{ feature }}</li>
    </ul>
    <div class="card-meta">
      <span>Updated: {{ updated }}</span>
      <span>Verified: {{ verified ? '✓' : '✗' }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  status: String,
  successRate: Number,
  features: Array,
  updated: String,
  verified: Boolean,
  type: {
    type: String,
    default: 'standard'
  }
})
</script>

<style scoped>
.method-card {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid var(--card-border);
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.method-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(255, 0, 102, 0.2);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.method-status {
  margin-left: auto;
  padding: 0.25rem 0.75rem;
  background: rgba(255, 0, 102, 0.1);
  border: 1px solid var(--card-primary);
  border-radius: 1rem;
  font-size: 0.8rem;
  color: var(--card-primary);
}

/* Additional card styles... */
</style>