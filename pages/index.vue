<template>
  <div class="flex flex-col items-center w-full">
    <div class="w-full">
      <UiBanners />
    </div>
  </div>
  <div v-if="isMobile" class="px-4 overflow-x-auto hide-scrollbar">
    <div class="flex space-x-4">
      <div v-for="category in categories" :key="category.id" class="custom-border bg-primary-200 center relative whitespace-nowrap rounded-lg py-2 px-3.5 text-xs font-bold border-inherit uppercase leading-none text-primary">
        <div class="mt-px">{{ category.name }}</div>
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center w-full">
    <div class="w-full min-h-[60vh] justify-center items-center pt-10">
      <CategorySection v-if="!isMobile" :items="categories"/>
      <ProductSection :items="products"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { fetchProducts, fetchCategories } from '~/api/product/[productSlug]'
import type { Product, Category } from '~/types'

const isMobile = computed(() => {
  return window.innerWidth <= 768
})

const products = ref<Product[]>([])
const categories = ref<Category[]>([])

try {
  const productsData = await fetchProducts()
  products.value = productsData.results
  const categoryData = await fetchCategories()
  categories.value = categoryData.results
} catch (error) {
  console.error('Failed to fetch products and categories:', error)
}
</script>
<style scoped>
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
.custom-border {
  border-width: 1px;
}
</style>