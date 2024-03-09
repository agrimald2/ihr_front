<template>
  <div class="flex">
    <Filters />
    <NarrowContainer class="w-3/4 mt-4">
      <div class="mb-20 lg:px-0" data-testid="category-layout">
        <!-- <h1
          class="my-10 font-bold typography-headline-3 md:typography-headline-2"
        >
          Resultados de {{ route.query.name }}
        </h1> -->
        <div class="md:flex gap-6" data-testid="category-page-content">
          <section
            v-if="productsFound"
            class="grid grid-cols-1 2xs:grid-cols-2 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 mb-10 md:mb-5"
            data-testid="category-grid"
          >
            <SharedCard
              v-for="product in productsFound"
              :key="product.id"
              :item="product"
            />
          </section>
          <section v-else>
            There are no products related to your search
          </section>
        </div>
      </div>
    </NarrowContainer>
  </div>
</template>

<script lang="ts" setup>
import { fetchProducts, fetchCategories } from '~/api/product/[productSlug]'
import type { Product, Category } from '~/types'

const route = useRoute()
const emitter = useEmitter()
const productsFound = ref<any[]>([])

const searchProducts = async (query: object) => {
    try {
    const response = await fetchProducts(query)
    productsFound.value = response.results
  } catch (error) {
    console.error('Failed to fetch products:', error)
  }
}

onBeforeMount(() => {
  if (route.query) {
    searchProducts(route.query)
  }
})

emitter.on('search-products', (query: object) => searchProducts(query))

</script>
