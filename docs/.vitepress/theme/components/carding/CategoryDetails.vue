```vue
<template>
  <div v-if="category" class="category-details" :class="{ active: isVisible }">
    <div class="details-header">
      <span class="category-icon">{{ category.icon }}</span>
      <h2>{{ category.label }}</h2>
      <button class="close-btn" @click="$emit('close')">×</button>
    </div>

    <div class="details-content">
      <div class="stats-grid">
        <div class="stat-item">
          <span class="stat-label">Success Rate</span>
          <span class="stat-value">98.5%</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Methods</span>
          <span class="stat-value">{{ getMethodCount(category.label) }}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Status</span>
          <span class="stat-value">Active</span>
        </div>
      </div>

      <div class="description">
        <h3>Overview</h3>
        <p>{{ getCategoryDescription(category.id) }}</p>
      </div>

      <div class="features">
        <h3>Features</h3>
        <ul>
          <li v-for="feature in getCategoryFeatures(category.id)" :key="feature">
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  category: {
    type: Object,
    default: null
  },
  isVisible: {
    type: Boolean,
    default: false
  }
})

defineEmits(['close'])

const getMethodCount = (label) => {
  const match = label.match(/\((\d+)\)/)
  return match ? match[1] : '0'
}

const getCategoryDescription = (id) => {
  const descriptions = {
    shipping: 'Premium same-day shipping methods with high success rates and reliable tracking.',
    direct: 'Direct access methods for instant account verification and processing.',
    food: 'Food delivery and grocery service methods with reliable success rates.',
    giftcards: 'E-gift card generation and validation methods for major retailers.',
    gambling: 'Secure gambling site methods with consistent success rates.',
    avs: 'Methods specifically designed for AVS enforced websites.',
    anrn: 'Account number and routing number accepted merchant methods.',
    bankguides: 'Specialized guides for specific banking institutions.',
    net30: 'Net-30 vendor account creation and verification methods.',
    builds: 'Profile building techniques for various platforms.',
    bruteforce: 'Advanced bruteforce methods for account access.',
    email: 'Email access and verification methods.',
    cookies: 'Cookie-based authentication and session management.'
  }
  return descriptions[id] || 'Category description not available.'
}

const getCategoryFeatures = (id) => {
  const features = {
    shipping: [
      'Real-time tracking',
      'Address verification bypass',
      'Same-day processing',
      'Support for major carriers'
    ],
    direct: [
      'Instant verification',
      'High success rate',
      'Multiple platform support',
      'Regular updates'
    ]
    // Add features for other categories...
  }
  return features[id] || ['Features not available']
}
</script>

<style scoped>
.category-details {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  width: 90%;
  max-width: 600px;
  background: rgba(0, 0, 0, 0.95);
  border: 1px solid var(--card-primary);
  border-radius: 1rem;
  padding: 2rem;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  z-index: 1000;
}

.category-details.active {
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, -50%) scale(1);
}

.details-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.category-icon {
  font-size: 2rem;
}

.details-header h2 {
  margin: 0;
  color: var(--card-primary);
}

.close-btn {
  margin-left: auto;
  background: none;
  border: none;
  color: var(--card-text);
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-item {
  padding: 1rem;
  background: rgba(255, 0, 102, 0.1);
  border: 1px solid rgba(255, 0, 102, 0.2);
  border-radius: 0.5rem;
  text-align: center;
}

.stat-label {
  display: block;
  font-size: 0.8rem;
  color: var(--card-text);
  opacity: 0.7;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 1.2rem;
  color: var(--card-primary);
  font-weight: bold;
}

.description, .features {
  margin-bottom: 2rem;
}

.description h3, .features h3 {
  color: var(--card-primary);
  margin-bottom: 1rem;
}

.description p {
  color: var(--card-text);
  line-height: 1.6;
}

.features ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.features li {
  padding: 0.75rem;
  background: rgba(255, 0, 102, 0.1);
  border: 1px solid rgba(255, 0, 102, 0.2);
  border-radius: 0.5rem;
  color: var(--card-text);
}

@media (max-width: 640px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .features ul {
    grid-template-columns: 1fr;
  }
}
</style>
```