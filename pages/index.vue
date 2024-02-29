<template>
  <div class="flex flex-col items-center w-full">
    <div class="w-full bg-white/80">
      <UiBanners />
    </div>
    <div class="w-full min-h-[60vh] justify-center items-center bg-gray-50">
      <ProductSection :items="products"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { fetchProducts, fetchCategories } from '~/api/product/[productSlug]'
import type { Product, Category } from '~/types'

const products = ref<Product[]>([])
const categories = ref<Category[]>([])

const goToProduct = (id: any) => {
  this.$router.push(`/products/${id}`)
}

try {
  const productsData = await fetchProducts()
  products.value = productsData.results
  const categoryData = await fetchCategories()
  categories.value = categoryData.results
} catch (error) {
  console.error('Failed to fetch products and categories:', error)
}
</script>
