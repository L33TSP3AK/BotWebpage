```vue
<script setup>
import { ref } from 'vue'
import DatabaseStats from './DatabaseStats.vue'
import DatabaseTables from './DatabaseTables.vue'
import DatabaseQueries from './DatabaseQueries.vue'
import DatabaseUpload from './DatabaseUpload.vue'
import DatabaseSelector from './DatabaseSelector.vue'

const activeTab = ref('dbs')
</script>

<template>
  <div class="database-panel">
    <div class="panel-tabs">
      <button 
        :class="['tab-button', { active: activeTab === 'dbs' }]"
        @click="activeTab = 'dbs'"
      >
        <span class="icon">💾</span>
        DBs
      </button>
      <button 
        :class="['tab-button', { active: activeTab === 'stats' }]"
        @click="activeTab = 'stats'"
      >
        <span class="icon">📊</span>
        Stats
      </button>
      <button 
        :class="['tab-button', { active: activeTab === 'tables' }]"
        @click="activeTab = 'tables'"
      >
        <span class="icon">📋</span>
        Tables
      </button>
      <button 
        :class="['tab-button', { active: activeTab === 'queries' }]"
        @click="activeTab = 'queries'"
      >
        <span class="icon">⚡</span>
        Queries
      </button>
      <button 
        :class="['tab-button', { active: activeTab === 'upload' }]"
        @click="activeTab = 'upload'"
      >
        <span class="icon">📤</span>
        Upload
      </button>
    </div>

    <div class="panel-content">
      <DatabaseSelector v-if="activeTab === 'dbs'" />
      <DatabaseStats v-if="activeTab === 'stats'" />
      <DatabaseTables v-if="activeTab === 'tables'" />
      <DatabaseQueries v-if="activeTab === 'queries'" />
      <DatabaseUpload v-if="activeTab === 'upload'" />
    </div>
  </div>
</template>

<style>
/* Previous styles remain unchanged */
</style>
```