<template>
  <div
    v-if="cart?.lineItems.length"
    class="md:grid md:grid-cols-12 md:gap-x-6"
    data-testid="cart-page-content"
  >
    <div class="col-span-7 mb-10 md:mb-0">
      <div>
        <UiCartProductCard />
      </div>
    </div>
    <OrderSummary class="col-span-5 md:sticky md:top-20 h-fit" />
  </div>
  <div
    v-else
    class="flex items-center justify-center flex-col pt-24 pb-32"
    data-testid="cart-page-content"
  >
    <NuxtImg
      src="/images/empty-cart.svg"
      alt="empty Cart ImgAlt"
      width="192"
      height="192"
    />
    <h2 class="mt-8">emptyCart</h2>
  </div>
</template>

<script setup>
import { SfButton } from '@storefront-ui/vue'

const cart = {
  lineItems: [
    { name: 'Producto 1', totalPrice: 10, atributes: 'test' },
    { name: 'Producto 2', totalPrice: 20, atributes: 'test' },
  ],
}
const NuxtLink = resolveComponent('NuxtLink')
</script>
