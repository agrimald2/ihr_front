<template>
  <SfScrollable
  buttons-placement="floating"
    class="items-center pb-4"
    data-testid="product-slider"
  >
  <UiProductCard
      v-for="product in products"
      :key="product.id"
      class="max-w-[192px]"
      :product = product
    />
  </SfScrollable>
</template>

<script setup>
import {
  SfScrollable,
} from '@storefront-ui/vue';
const props = defineProps({
  items: Array
})
const products = props.items
</script>