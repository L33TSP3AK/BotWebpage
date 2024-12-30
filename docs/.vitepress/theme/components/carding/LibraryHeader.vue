
<template>
  <div class="library-header">
    <div class="matrix-overlay"></div>
    <h1 class="cyber-title">PRIVATE METHODS</h1>
    <div class="system-status">
      <StatusIndicator label="SYSTEM" value="ACTIVE" />
      <StatusIndicator label="SUCCESS" value="98.5%" />
      <StatusIndicator label="METHODS" value="15" />
    </div>
  </div>
</template>

<style scoped>
.library-header {
  text-align: center;
  padding: 3rem 0;
  position: relative;
}

.matrix-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(255, 0, 102, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(255, 0, 102, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: matrixScroll 20s linear infinite;
  pointer-events: none;
}

.cyber-title {
  font-size: 3rem;
  color: #ff0066;
  text-shadow: 
    0 0 5px #ff0066,
    0 0 10px #ff0066,
    0 0 20px #ff0066;
  margin: 0 0 2rem 0;
}

@keyframes matrixScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}
</style>