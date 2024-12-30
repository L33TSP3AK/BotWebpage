```vue
<template>
  <div class="method-categories">
    <div 
      v-for="cat in categories" 
      :key="cat.id"
      class="category"
      :class="{ active: selectedCategory === cat.id }"
      @click="$emit('select', cat.id)"
    >
      <span class="category-icon">{{ cat.icon }}</span>
      <span class="category-label">{{ cat.label }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
  },
  selectedCategory: {
    type: String,
    default: 'all'
  }
})

defineEmits(['select'])
</script>

<style scoped>
.method-categories {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0.5rem;
  margin: 1.5rem 0;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
}

.category {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: rgba(255, 0, 102, 0.1);
  border: 1px solid rgba(255, 0, 102, 0.2);
  border-radius: 0.25rem;
  color: #ff0066;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.8rem;
}

.category:hover,
.category.active {
  background: rgba(255, 0, 102, 0.15);
  border-color: #ff0066;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(255, 0, 102, 0.2);
}

.category-icon {
  font-size: 1rem;
}

.category-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 640px) {
  .method-categories {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  
  .category {
    padding: 0.4rem 0.6rem;
    font-size: 0.75rem;
  }
}
</style>
```