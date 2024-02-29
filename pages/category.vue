<template>
  <NarrowContainer>
    <div class="mb-20 px-4 md:px-0" data-testid="category-layout">
      <h1
        class="my-10 font-bold typography-headline-3 md:typography-headline-2"
      >
        Categoria 1
      </h1>
      <div class="md:flex gap-6" data-testid="category-page-content">
        <section
          v-if="products"
          class="grid grid-cols-1 2xs:grid-cols-2 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 mb-10 md:mb-5"
          data-testid="category-grid"
        >
          <UiProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </section>
      </div>
    </div>
  </NarrowContainer>
</template>

<script lang="ts" setup>
import { fetchProducts, fetchCategories } from "~/api/product/[productSlug]";
import type { Product, Category } from "~/types";

const products = ref<Product[]>([]);
const categories = ref<Category[]>([]);

try {
  const productsData = await fetchProducts();
  products.value = productsData.results;
  console.log("Products: ", products.value);
  const categoryData = await fetchCategories();
  categories.value = categoryData.results;
  console.log("Categories: ", categories.value);
} catch (error) {
  console.error("Failed to fetch products:", error);
}
// onMounted(async () => {
// })
</script>
