<script setup>
import { ref } from 'vue'

const tables = ref([
  { name: 'users', rows: 1250, size: '2.5 MB', lastUpdated: '2024-01-20' },
  { name: 'configs', rows: 5430, size: '12.8 MB', lastUpdated: '2024-01-19' },
  { name: 'logs', rows: 8740, size: '240.7 MB', lastUpdated: '2024-01-20' }
])
</script>

<template>
  <div class="tables-container">
    <div class="table-controls">
      <button class="control-button">
        <span class="icon">➕</span>
        New Table
      </button>
      <button class="control-button">
        <span class="icon">🔄</span>
        Refresh
      </button>
    </div>

    <div class="tables-list">
      <div class="table-header">
        <div class="col">Table Name</div>
        <div class="col">Rows</div>
        <div class="col">Size</div>
        <div class="col">Last Updated</div>
        <div class="col">Actions</div>
      </div>

      <div v-for="table in tables" :key="table.name" class="table-row">
        <div class="col">{{ table.name }}</div>
        <div class="col">{{ table.rows }}</div>
        <div class="col">{{ table.size }}</div>
        <div class="col">{{ table.lastUpdated }}</div>
        <div class="col actions">
          <button class="action-button" title="View">👁️</button>
          <button class="action-button" title="Edit">✏️</button>
          <button class="action-button" title="Delete">🗑️</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tables-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.table-controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.control-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
  color: #00ff00;
  cursor: pointer;
  transition: all 0.3s ease;
}

.control-button:hover {
  background: rgba(0, 255, 0, 0.2);
  transform: translateY(-2px);
}

.tables-list {
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
  overflow: hidden;
}

.table-header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: rgba(0, 255, 0, 0.1);
  font-weight: bold;
  color: #00ff00;
}

.table-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border-top: 1px solid rgba(0, 255, 0, 0.1);
  transition: all 0.3s ease;
}

.table-row:hover {
  background: rgba(0, 255, 0, 0.05);
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.action-button {
  padding: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.action-button:hover {
  opacity: 1;
  transform: scale(1.1);
}
</style>