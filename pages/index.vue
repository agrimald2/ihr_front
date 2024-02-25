<template>
  <div class="index-page">
    <!-- Header -->
    <Header />

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

    <!-- Footer -->
    <Footer />
  </div>
</template>
<script lang="ts" setup>
import { fetchProducts } from '~/api/products'
const products = fetchProducts()
console.log(products)
</script>
