
<template>
  <div class="methods-grid">
    <MethodCard
      v-for="method in methods"
      :key="method.id"
      v-bind="method"
    />
  </div>
</template>

<script setup>
import MethodCard from './MethodCard.vue'

defineProps({
  methods: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .methods-grid {
    grid-template-columns: 1fr;
  }
}
</style>
