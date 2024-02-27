<template>
  <!-- Here goes the categories component -->
  <div class="relative overflow-hidden">
    <!-- Left arrow button -->
    <button @click="scrollLeft" class="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white opacity-75 px-2 py-1 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
    </button>

    <!-- Categories grid -->
    <div class="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto">
      <div v-for="(category, index) in categories" :key="index" class="bg-white p-4 shadow-md rounded-md">
        <img :src="category.image" alt="Category Image" class="w-full h-32 object-cover mb-4 rounded-md">
        <h3 class="text-lg font-semibold mb-2">{{ category.name }}</h3>
        <p class="text-gray-600">{{ category.description }}</p>
      </div>
    </div>

    <!-- Right arrow button -->
    <button @click="scrollRight" class="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white opacity-75 px-2 py-1 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  items: Array
})
const categories = props.items

const scrollLeft = () => {
  const container = document.querySelector('.grid')
  container.scrollLeft -= 100
}

const scrollRight = () => {
  const container = document.querySelector('.grid')
  container.scrollLeft += 100
}
</script>
