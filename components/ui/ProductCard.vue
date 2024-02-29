<template>
  <div @click="$emit('goToProduct', product.id)">
    <div
      class="border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0"
      data-testid="product-card"
    >
      <div class="relative">
        <SfLink href="#" class="block">
          <img
            :src="product.images[0]"
            :alt="product.brand"
            class="object-cover rounded-md aspect-square w-full h-full"
            width="190"
            height="190"
          />
        </SfLink>
      </div>
      <div class="p-2 border-t border-neutral-200 typography-text-sm">
        <SfLink
          :tag="NuxtLink"
          :to="`${paths.product}${product.id}`"
          variant="secondary"
        >
          {{ product.name }}
        </SfLink>
        <div class="flex items-center pt-1">
          <SfRating size="xs" :value="product.store ?? 0" :max="5" />
          <SfLink to="#" variant="secondary" class="ml-1 no-underline">
            <SfCounter size="xs">{{ product.store }}</SfCounter>
          </SfLink>
        </div>
        <p
          class="block py-2 font-normal typography-text-xs text-neutral-700 text-justify"
        >
          {{ product.description }}
        </p>
        <span
          class="block pb-2 font-bold typography-text-sm"
          data-testid="product-card-vertical-price"
        >
          ${{ product.price }}
        </span>
        <SfButton size="sm">
          <template #prefix>
            <SfIconShoppingCart size="sm" />
          </template>
          Add to cart
        </SfButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  SfLink,
  SfRating,
  SfCounter,
  SfButton,
  SfIconShoppingCart,
} from "@storefront-ui/vue";
const props = defineProps({
  product: {
    type: Object,
    default: {},
  },
});

const NuxtLink = resolveComponent("NuxtLink");
</script>
