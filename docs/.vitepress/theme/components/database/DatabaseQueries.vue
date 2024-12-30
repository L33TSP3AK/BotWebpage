<script setup>
import { ref } from 'vue'

const query = ref('')
const results = ref([])
const isLoading = ref(false)

const executeQuery = () => {
  if (!query.value.trim()) return
  
  isLoading.value = true
  // Simulate query execution
  setTimeout(() => {
    results.value = [
      { id: 1, name: 'Test User', email: 'test@example.com' },
      { id: 2, name: 'Admin User', email: 'admin@example.com' }
    ]
    isLoading.value = false
  }, 1000)
}
</script>

<template>
  <div class="query-container">
    <div class="query-editor">
      <div class="editor-header">
        <span class="icon">📝</span>
        SQL Query
      </div>
      <textarea 
        v-model="query"
        class="query-input"
        placeholder="Enter your SQL query here..."
        rows="5"
      ></textarea>
      <div class="editor-footer">
        <button 
          class="execute-button"
          :disabled="!query.trim() || isLoading"
          @click="executeQuery"
        >
          <span class="icon">{{ isLoading ? '⏳' : '▶️' }}</span>
          {{ isLoading ? 'Executing...' : 'Execute Query' }}
        </button>
      </div>
    </div>

    <div class="results-section">
      <div class="results-header">
        <span class="icon">📊</span>
        Query Results
      </div>
      <div v-if="results.length" class="results-table">
        <div class="results-row header">
          <div v-for="(value, key) in results[0]" :key="key" class="cell">
            {{ key }}
          </div>
        </div>
        <div v-for="row in results" :key="row.id" class="results-row">
          <div v-for="(value, key) in row" :key="key" class="cell">
            {{ value }}
          </div>
        </div>
      </div>
      <div v-else class="no-results">
        No results to display
      </div>
    </div>
  </div>
</template>

<style scoped>
.query-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.query-editor {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
  overflow: hidden;
}

.editor-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(0, 255, 0, 0.1);
  color: #00ff00;
  font-weight: bold;
}

.query-input {
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  color: #00ff00;
  font-family: monospace;
  resize: vertical;
}

.query-input:focus {
  outline: none;
  background: rgba(0, 0, 0, 0.4);
}

.editor-footer {
  padding: 0.75rem 1rem;
  background: rgba(0, 0, 0, 0.3);
}

.execute-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.25rem;
  color: #00ff00;
  cursor: pointer;
  transition: all 0.3s ease;
}

.execute-button:not(:disabled):hover {
  background: rgba(0, 255, 0, 0.2);
  transform: translateY(-2px);
}

.execute-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.results-section {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
  overflow: hidden;
}

.results-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(0, 255, 0, 0.1);
  color: #00ff00;
  font-weight: bold;
}

.results-table {
  overflow-x: auto;
}

.results-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  padding: 0.75rem 1rem;
  border-top: 1px solid rgba(0, 255, 0, 0.1);
}

.results-row.header {
  background: rgba(0, 255, 0, 0.1);
  font-weight: bold;
  color: #00ff00;
}

.cell {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.no-results {
  padding: 2rem;
  text-align: center;
  color: #666;
}
</style>
