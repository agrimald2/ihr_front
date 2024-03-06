<template>
  <div
    class="md:grid md:grid-cols-12 md:gap-x-6"
    data-testid="cart-page-content"
  >
    <div v-if="storedProducts" class="col-span-7 mb-10 md:mb-0">
      <UiCartProductCard v-for="item in storedProducts" :key="item.id" :product="item"/>
    </div>
    <div v-else>Car is empty</div>
    <OrderSummary class="col-span-5 md:sticky md:top-20 h-fit" />
  </div>
</template>

<script setup>
import { useCartStore } from '~/store/cart'

const storedProducts = useCartStore().$state?.products
const NuxtLink = resolveComponent('NuxtLink')
</script>
