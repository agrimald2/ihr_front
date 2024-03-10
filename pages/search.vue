<template>
  <div class="">
    <Filters />
    <NarrowContainer class="max-w-full mt-4">
      <section
        v-if="productsFound"
        class="w-full flex flex-wrap justify-center max-w-full gap-5 md:gap-8 mt-5 mb-5"
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
