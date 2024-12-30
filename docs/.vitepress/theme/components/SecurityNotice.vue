<!-- SecurityNotice.vue -->
<script setup lang="ts">
const props = defineProps<{
  type: 'security' | 'legal'
}>()

const messages = {
  security: 'Always maintain strict operational security when handling sensitive data',
  legal: 'Users are responsible for ensuring compliance with applicable laws and regulations'
}

const icons = {
  security: '🔒',
  legal: '⚖️'
}

const titles = {
  security: 'Operational Security',
  legal: 'Legal Notice'
}
</script>

<template>
  <div class="security-notice" :class="type">
    <div class="notice-content">
      <div class="notice-icon">{{ icons[type] }}</div>
      <h3 class="glitch-text" :data-text="titles[type]">{{ titles[type] }}</h3>
      <p>{{ messages[type] }}</p>
    </div>
    <div class="notice-scanner"></div>
  </div>
</template>

<style scoped>
.security-notice {
  position: relative;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.8);
}

.security-notice.security {
  border: 1px solid #00ff00;
}

.security-notice.legal {
  border: 1px solid #ff0000;
}

.notice-content {
  position: relative;
  z-index: 1;
}

.notice-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.glitch-text {
  position: relative;
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  animation: glitch-skew 1s infinite linear alternate-reverse;
}

.security .glitch-text {
  color: #00ff00;
  text-shadow: 0 0 5px #00ff00;
}

.legal .glitch-text {
  color: #ff0000;
  text-shadow: 0 0 5px #ff0000;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.security .glitch-text::before {
  color: #00cc00;
  animation: glitch 0.4s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  transform: translate(-2px);
  opacity: 0.8;
}

.security .glitch-text::after {
  color: #00ff00;
  animation: glitch 0.5s infinite;
  clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
  transform: translate(2px);
  opacity: 0.8;
}

.legal .glitch-text::before {
  color: #cc0000;
  animation: glitch 0.4s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  transform: translate(-2px);
  opacity: 0.8;
}

.legal .glitch-text::after {
  color: #ff0000;
  animation: glitch 0.5s infinite;
  clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
  transform: translate(2px);
  opacity: 0.8;
}

.notice-scanner {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, currentColor, transparent);
  animation: scan 2s linear infinite;
}

.security .notice-scanner {
  background: linear-gradient(90deg, transparent, #00ff00, transparent);
}

.legal .notice-scanner {
  background: linear-gradient(90deg, transparent, #ff0000, transparent);
}

@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

@keyframes glitch-skew {
  0% { transform: skew(0deg); }
  20% { transform: skew(-2deg); }
  40% { transform: skew(2deg); }
  60% { transform: skew(-1deg); }
  80% { transform: skew(3deg); }
  100% { transform: skew(0deg); }
}

@keyframes scan {
  0% { left: -100%; }
  100% { left: 100%; }
}
</style>