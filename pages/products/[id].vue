<template>
  <div class="flex justify-center">
    <SharedCard
      v-if="isMobile"
      :item=product
      :card-height="'h-60'"
      :card-width="'w-60'"
    />
  </div>
  <div class="flex gap-4 p-4">
    <ProductGallery v-if="!isMobile" :images="productImages"/>
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

const isMobile = computed(() => window.innerWidth <= 768)
const productImages = computed(() => product.value.images)
</script>
