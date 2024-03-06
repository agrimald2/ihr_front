<template>
  <div class="flex gap-4 p-4">
    <ProductGallery :images="productImages"/>
    <ProductDetails :product="product"/>
  </div>
</template>

<script lang="ts" setup>
import { fetchProducts } from '~/api/product/[productSlug]'

const product = ref([])
const route = useRoute()

onBeforeMount(async () => {
  try {
    const response = await fetchProducts({ id: route.params.id })
    const randomNumber = Math.floor(Math.random() * 8)
    product.value = response.results[randomNumber]
  } catch (error) {
    console.error('Failed to fetch products:', error)
  }
})

const productImages = computed(() => product.value.images)
</script>
