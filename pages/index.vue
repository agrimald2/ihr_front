<template>
  <div class="flex flex-col items-center w-full">
    <div class="w-full">
      <UiBanners />
    </div>
  </div>

  <!-- Search Mobile -->
  <div v-if="isMobile" class="mx-10 my-4">
    <form class="mx-auto" @submit.prevent="search">   
      <div class="relative">
        <div class="absolute inset-y-0 end-1 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input v-model="inputValue" type="search" class="block w-full m-2 p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search" required />
      </div>
    </form>
  </div>
  <!-- Categories Mobile -->
  <div v-if="isMobile" class="px-4 overflow-x-auto hide-scrollbar mb-0">
    <div class="flex space-x-4">
      <div v-for="category in categories" :key="category.id" class="custom-border bg-primary-200 center relative whitespace-nowrap rounded-lg py-2 px-3.5 text-xs font-bold border-inherit uppercase leading-none text-primary">
        <div class="mt-px">{{ category.name }}</div>
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center w-full">
    <div class="w-full min-h-[60vh] justify-center items-center md:pt-10">
      <CategorySection v-if="!isMobile" :items="categories"/>
      <ProductSection :items="products"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { fetchProducts, fetchCategories } from '~/api/product/[productSlug]'
import type { Product, Category } from '~/types'

const route = useRoute()
const isMobile = computed(() => {
  return window.innerWidth <= 768
})
const inputValue = ref('')

const search = () => {
  const { sharedMap, convertMapToObject, addFieldToMap } = useSharedMap()
  addFieldToMap(sharedMap, 'name',  inputValue.value);
  const emitter = useEmitter()
  emitter.emit('search-products', convertMapToObject(sharedMap))

  if (route.path !== 'search') {
    navigateTo({
      path: '/search',
      query: {
        name: inputValue.value,
      },
    })
  } else {
    navigateTo({
      query: {
        name: inputValue.value
      }
    })
  }
}

const products = ref<Product[]>([])
const categories = ref<Category[]>([])

try {
  const productsData = await fetchProducts()
  // products.value = productsData.results
  products.value = productsData
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