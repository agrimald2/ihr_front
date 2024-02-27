<template>
  <!-- Main Content -->
  <div class="main-content">
    <!-- Promotional Banner -->
    <!-- <PromotionalBanner /> -->

    <!-- Categories -->
    <Categories :items="categories"/>

    <!-- Featured Products -->
    <FeaturedProducts />

    <!-- Testimonials -->
    <Testimonials />
  </div>
</template>
<script lang="ts" setup>
import { fetchProducts, fetchCategories } from '~/api/product/[productSlug]';
import type { Product, Category } from '~/types';

const name = 'Market'
const products: Ref<Product[]> = ref([]);
const categories: Ref<Category[]> = ref([]);


onMounted(async () => {
  try {
    const productsData = await fetchProducts();
    products.value = productsData.results
    const categoryData = await fetchCategories();
    categories.value = categoryData.results;
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
});
</script>
