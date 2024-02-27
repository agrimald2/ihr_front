<template>
  <div class="products-grid grid grid-cols-5 gap-4">
    <div v-for="(product, index) in products" :key="index" class="bg-white p-4 shadow-md rounded-md">
      <img :src="product.image" alt="Product Image" class="w-full h-32 object-cover mb-4 rounded-md">
      <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
      <p class="text-gray-600">{{ product.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: Array
})
const products = props.items
</script>

<style scoped>
.products-grid {
  /* Set the grid to have 5 columns */
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem; /* Adjust the gap between items */
}
</style>
