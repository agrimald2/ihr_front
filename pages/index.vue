<template>
  <!-- Main Content -->
  <div class="main-content">
    <!-- Promotional Banner -->
    <PromotionalBanner />

    <!-- Featured Products -->
    <FeaturedProducts />

    <!-- Categories -->
    <Categories />

    <!-- Testimonials -->
    <Testimonials />
  </div>
</template>
<script lang="ts" setup>
import { fetchProducts } from '~/api/product/[productSlug]';
const name = 'Market'
const products = ref([]);

onMounted(async () => {
  try {
    const data = await fetchProducts();
    products.value = data.results
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
});
</script>
