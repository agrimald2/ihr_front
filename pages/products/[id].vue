<template>
  <div class="flex gap-4 p-4">
    <ProductGallery :images="productImages"/>
    <ProductDetails :product="product"/>
  </div>
</template>

<script lang="ts" setup>
import { fetchProducts, getProduct } from '~/api/product/[productSlug]'

const product = ref([])
const route = useRoute()

onBeforeMount(async () => {
  try {
    product.value = await getProduct(route.params.id)
  } catch (error) {
    console.error('Failed to fetch products:', error)
  }
})

const productImages = computed(() => product.value.images)
</script>
