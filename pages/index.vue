<template>
  <!-- Centered Main Content with Space on Sides -->
  <div class="wrapper flex justify-center px-4">
    <div class="max-w-screen-lg w-full">
      <!-- Main Content -->
      <div class="main-content">
        <!-- Promotional Banner -->
        <UiBanners/>
        <!-- <PromotionalBanner /> -->
        <ProductSlider :items="products"/>
      
       

        <!-- Testimonials -->
        <Testimonials />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { fetchProducts, fetchCategories } from '~/api/product/[productSlug]'
import type { Product, Category } from '~/types'

const products = ref<Product[]>([])
const categories = ref<Category[]>([])

try {
  const productsData = await fetchProducts()
  products.value = productsData.results
  console.log('Products: ', products.value)
  const categoryData = await fetchCategories()
  categories.value = categoryData.results
  console.log('Categories: ', categories.value)
} catch (error) {
  console.error('Failed to fetch products:', error)
}
// onMounted(async () => {
// })
</script>
