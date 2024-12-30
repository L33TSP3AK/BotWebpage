
<script setup>
import { ref } from 'vue'
import { uploadDatabase } from '../../utils/database'
import { formatFileSize } from '../../utils/database'

const selectedFile = ref(null)
const uploadProgress = ref({
  loaded: 0,
  total: 0,
  percentage: 0
})
const uploadStatus = ref('')

const handleFileSelect = (event) => {
  const file = event.target.files[0]
  if (file) {
    selectedFile.value = file
  }
}

const handleUpload = async () => {
  if (!selectedFile.value) return
  
  try {
    uploadStatus.value = 'uploading'
    await uploadDatabase(selectedFile.value, (progress) => {
      uploadProgress.value = progress
    })
    uploadStatus.value = 'success'
  } catch (error) {
    uploadStatus.value = 'error'
    console.error('Upload failed:', error)
  }
}
</script>

<template>
  <div class="upload-container">
    <div class="upload-header">
      <span class="icon">📤</span>
      Database Upload
    </div>

    <div class="upload-content">
      <div class="file-input-wrapper">
        <input 
          type="file" 
          accept=".db,.sqlite,.sql"
          @change="handleFileSelect"
          class="file-input"
        />
        <div class="file-drop-zone">
          <span class="icon">📁</span>
          <span v-if="!selectedFile">
            Drop database file here or click to browse
          </span>
          <span v-else>
            Selected: {{ selectedFile.name }} ({{ formatFileSize(selectedFile.size) }})
          </span>
        </div>
      </div>

      <div v-if="uploadStatus === 'uploading'" class="progress-bar">
        <div 
          class="progress-fill"
          :style="{ width: `${uploadProgress.percentage}%` }"
        ></div>
        <div class="progress-text">
          {{ formatFileSize(uploadProgress.loaded) }} of {{ formatFileSize(uploadProgress.total) }}
          ({{ uploadProgress.percentage }}%)
        </div>
      </div>

      <div class="upload-status" :class="uploadStatus">
        <template v-if="uploadStatus === 'uploading'">
          Uploading... {{ uploadProgress.percentage }}%
        </template>
        <template v-else-if="uploadStatus === 'success'">
          Upload complete!
        </template>
        <template v-else-if="uploadStatus === 'error'">
          Upload failed. Please try again.
        </template>
      </div>

      <button 
        class="upload-button"
        @click="handleUpload"
        :disabled="!selectedFile || uploadStatus === 'uploading'"
      >
        <span class="icon">{{ uploadStatus === 'uploading' ? '⏳' : '📤' }}</span>
        {{ uploadStatus === 'uploading' ? 'Uploading...' : 'Upload Database' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.upload-container {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
  overflow: hidden;
}

.upload-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(0, 255, 0, 0.1);
  color: #00ff00;
  font-weight: bold;
}

.upload-content {
  padding: 1.5rem;
}

.file-input-wrapper {
  position: relative;
  margin-bottom: 1rem;
}

.file-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.file-drop-zone {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  border: 2px dashed rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
  text-align: center;
}

.progress-bar {
  height: 4px;
  background: rgba(0, 255, 0, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin: 1rem 0;
}

.progress-fill {
  height: 100%;
  background: #00ff00;
  transition: width 0.3s ease;
}

.progress-text {
  text-align: center;
  font-size: 0.9rem;
  color: #00ff00;
  margin-top: 0.5rem;
  font-family: monospace;
}

.upload-status {
  text-align: center;
  margin: 1rem 0;
  font-family: monospace;
}

.upload-status.uploading { color: #00ff00; }
.upload-status.success { color: #00ff00; }
.upload-status.error { color: #ff0000; }

.upload-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
  color: #00ff00;
  cursor: pointer;
  transition: all 0.3s ease;
}

.upload-button:not(:disabled):hover {
  background: rgba(0, 255, 0, 0.2);
  transform: translateY(-2px);
}

.upload-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
