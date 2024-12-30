```vue
<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  bankName: String,
  flowSteps: {
    type: Array,
    default: () => []
  }
})

const currentStep = ref(0)
const input = ref('')
const isProcessing = ref(false)
const showError = ref(false)

const stepStatus = computed(() => {
  if (isProcessing.value) return 'Processing...'
  if (showError.value) return 'Invalid Input'
  return props.flowSteps[currentStep.value]?.prompt || 'Ready'
})

function handleKeyPress(key) {
  if (isProcessing.value) return
  input.value += key
}

function clearInput() {
  input.value = ''
  showError.value = false
}

async function submitInput() {
  if (!input.value || isProcessing.value) return
  
  isProcessing.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  if (input.value.length < 4) {
    showError.value = true
    isProcessing.value = false
    return
  }
  
  if (currentStep.value < props.flowSteps.length - 1) {
    currentStep.value++
    input.value = ''
  }
  
  isProcessing.value = false
}
</script>

<template>
  <div class="ivr-simulator">
    <div class="simulator-display" :class="{ error: showError }">
      <div class="status-line">{{ stepStatus }}</div>
      <div class="input-line">{{ input || '_ _ _ _' }}</div>
      <div class="processing-indicator" v-if="isProcessing">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>

    <div class="keypad">
      <div v-for="n in 9" :key="n" class="key" @click="handleKeyPress(n)">
        {{ n }}
        <span class="key-letters">{{ ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ', ''][n-1] }}</span>
      </div>
      <div class="key" @click="handleKeyPress('*')">*</div>
      <div class="key" @click="handleKeyPress(0)">
        0
        <span class="key-letters">+</span>
      </div>
      <div class="key" @click="handleKeyPress('#')">#</div>
    </div>

    <div class="simulator-controls">
      <button class="control-btn clear" @click="clearInput">Clear</button>
      <button class="control-btn submit" @click="submitInput" :disabled="!input || isProcessing">
        Enter
      </button>
    </div>
  </div>
</template>

<style scoped>
.ivr-simulator {
  background: rgba(0, 0, 0, 0.8);
  border-radius: 0.75rem;
  padding: 1.5rem;
  max-width: 400px;
  margin: 2rem auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.simulator-display {
  background: #001100;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
  font-family: monospace;
  text-align: center;
  border: 1px solid rgba(0, 255, 0, 0.2);
}

.simulator-display.error {
  background: #110000;
  border-color: rgba(255, 0, 0, 0.2);
}

.status-line {
  color: #00ff00;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.input-line {
  font-size: 1.5rem;
  color: #00ff00;
  letter-spacing: 4px;
}

.processing-indicator {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.dot {
  width: 8px;
  height: 8px;
  background: #00ff00;
  border-radius: 50%;
  animation: processingDot 1s infinite;
}

.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }

.keypad {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.key {
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1.25rem;
  color: #fff;
}

.key:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.key:active {
  transform: translateY(1px);
}

.key-letters {
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.25rem;
}

.simulator-controls {
  display: flex;
  gap: 1rem;
}

.control-btn {
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
}

.control-btn.clear {
  background: rgba(255, 0, 0, 0.2);
  color: #ff0000;
}

.control-btn.submit {
  background: rgba(0, 255, 0, 0.2);
  color: #00ff00;
}

.control-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@keyframes processingDot {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
}
</style>
```