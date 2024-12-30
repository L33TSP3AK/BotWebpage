
<script setup>
import { ref, computed } from 'vue'
import { categories } from '../../data/carding/categories'
import { methods } from '../../data/carding/methods'
import LibraryHeader from './LibraryHeader.vue'
import CategoryFilter from './CategoryFilter.vue'
import MethodsGrid from './MethodsGrid.vue'
import CategoryDetails from './CategoryDetails.vue'
import RequirementsSection from './RequirementsSection.vue'
import SecurityWarning from './SecurityWarning.vue'

const selectedCategory = ref('all')
const showCategoryDetails = ref(false)

const filteredMethods = computed(() => {
  if (selectedCategory.value === 'all') {
    return methods
  }
  return methods.filter(method => method.category === selectedCategory.value)
})

const handleCategorySelect = (category) => {
  selectedCategory.value = category
  showCategoryDetails.value = category !== 'all'
}

const selectedCategoryData = computed(() => {
  return categories.find(cat => cat.id === selectedCategory.value)
})
</script>

<template>
  <div class="library-container">
    <LibraryHeader />
    
    <CategoryFilter
      :categories="categories"
      :selectedCategory="selectedCategory"
      @select="handleCategorySelect"
    />
    
    <MethodsGrid :methods="filteredMethods" />
    
    <RequirementsSection />
    <SecurityWarning />

    <CategoryDetails
      :category="selectedCategoryData"
      :isVisible="showCategoryDetails"
      @close="showCategoryDetails = false"
    />
  </div>
</template>

<style scoped>
.library-container {
  padding: 2rem;
  background: linear-gradient(45deg, #000, #1a0011);
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}
</style>
