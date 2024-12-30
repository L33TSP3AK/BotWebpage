<template>
  <div class="security-warning">
    <div class="warning-icon">⚠️</div>
    <div class="warning-content">
      <h3>Security Notice</h3>
      <ul>
        <li>Always use secure and clean systems</li>
        <li>Maintain strict OPSEC protocols</li>
        <li>Never share method details</li>
        <li>Use dedicated profiles only</li>
      </ul>
    </div>
    <div class="warning-scanner"></div>
  </div>
</template>

<style scoped>
.security-warning {
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  display: flex;
  gap: 1.5rem;
}

.warning-icon {
  font-size: 2rem;
}

.warning-content h3 {
  color: var(--card-warning);
  margin-bottom: 1rem;
}

.warning-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.warning-content li {
  padding: 0.5rem 0;
  color: var(--card-text);
  opacity: 0.9;
}

.warning-scanner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--card-warning), transparent);
  animation: scan 2s linear infinite;
}

@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(400%); }
}
</style>