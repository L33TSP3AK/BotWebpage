<script setup>
import { ref, onMounted } from 'vue'

const stats = ref({
  tables: 0,
  rows: 0,
  size: '0 MB',
  lastBackup: 'Never'
})

// Simulated stats update
onMounted(() => {
  stats.value = {
    tables: 12,
    rows: 15420,
    size: '256 MB',
    lastBackup: '2024-01-20 15:30 UTC'
  }
})
</script>

<template>
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon">📊</div>
      <div class="stat-info">
        <div class="stat-value">{{ stats.tables }}</div>
        <div class="stat-label">Tables</div>
      </div>
    </div>
    
    <div class="stat-card">
      <div class="stat-icon">📝</div>
      <div class="stat-info">
        <div class="stat-value">{{ stats.rows }}</div>
        <div class="stat-label">Total Rows</div>
      </div>
    </div>
    
    <div class="stat-card">
      <div class="stat-icon">💾</div>
      <div class="stat-info">
        <div class="stat-value">{{ stats.size }}</div>
        <div class="stat-label">Database Size</div>
      </div>
    </div>
    
    <div class="stat-card">
      <div class="stat-icon">🔄</div>
      <div class="stat-info">
        <div class="stat-value">{{ stats.lastBackup }}</div>
        <div class="stat-label">Last Backup</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
  border-color: #00ff00;
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.2);
}

.stat-icon {
  font-size: 2rem;
}

.stat-info {
  flex: 1;
}

.stat-value {
  font-size: 1.25rem;
  color: #00ff00;
  font-family: monospace;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.25rem;
}
</style>