```vue
<script setup>
import { ref } from 'vue'

const databases = ref([
  { id: 1, name: 'main.db', size: '256 MB', tables: 12, lastAccessed: '2024-01-20' },
  { id: 2, name: 'backup.db', size: '248 MB', tables: 12, lastAccessed: '2024-01-19' },
  { id: 3, name: 'test.db', size: '45 MB', tables: 5, lastAccessed: '2024-01-18' }
])

const selectedDb = ref(databases.value[0])

const selectDatabase = (db) => {
  selectedDb.value = db
}
</script>

<template>
  <div class="db-selector">
    <div class="selector-header">
      <span class="icon">💾</span>
      Available Databases
    </div>
    
    <div class="databases-list">
      <div 
        v-for="db in databases" 
        :key="db.id"
        class="database-item"
        :class="{ active: selectedDb?.id === db.id }"
        @click="selectDatabase(db)"
      >
        <div class="db-icon">📁</div>
        <div class="db-info">
          <div class="db-name">{{ db.name }}</div>
          <div class="db-meta">
            {{ db.size }} • {{ db.tables }} tables • Last accessed {{ db.lastAccessed }}
          </div>
        </div>
        <div class="db-actions">
          <button class="action-btn" title="Backup">💾</button>
          <button class="action-btn" title="Delete">🗑️</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.db-selector {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
  overflow: hidden;
}

.selector-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(0, 255, 0, 0.1);
  color: #00ff00;
  font-weight: bold;
}

.databases-list {
  padding: 0.5rem;
}

.database-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.database-item:hover {
  background: rgba(0, 255, 0, 0.05);
}

.database-item.active {
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.3);
}

.db-info {
  flex: 1;
}

.db-name {
  color: #00ff00;
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.db-meta {
  font-size: 0.9rem;
  color: #666;
}

.db-actions {
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.database-item:hover .db-actions {
  opacity: 1;
}

.action-btn {
  padding: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.action-btn:hover {
  opacity: 1;
  transform: scale(1.1);
}
</style>
```