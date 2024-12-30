```vue
<script setup>
// Animation and grid effects for the security overlay
</script>

<template>
  <div class="security-overlay">
    <div class="security-cam"></div>
    <div class="night-vision"></div>
    <div class="surveillance-grid"></div>
  </div>
</template>

<style scoped>
.security-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.security-cam {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    transparent 0px,
    rgba(0, 0, 0, 0.1) 1px,
    transparent 2px
  );
  animation: scanlines 10s linear infinite;
  opacity: 0.3;
}

.night-vision {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 50%,
    transparent,
    rgba(0, 255, 0, 0.1)
  );
  mix-blend-mode: screen;
}

.surveillance-grid {
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: gridMove 20s linear infinite;
}

@keyframes scanlines {
  0% { transform: translateY(0); }
  100% { transform: translateY(20px); }
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}
</style>
```