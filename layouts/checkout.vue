<template>
  <UiNavbarTop />
  <main data-testid="checkout-layout">
    <NarrowContainer>
      <div class="px-4 md:px-0 mb-20">
        <div class="flex justify-between mt-8 mb-10 px-4 md:px-0">
          <h1 class="font-bold typography-headline-3 md:typography-headline-2">
            {{ heading }}
          </h1>
          <SfButton
            tag="NuxtLink"
            to="#"
            class="flex md:hidden whitespace-nowrap"
            size="sm"
            variant="tertiary"
          >
            <template #prefix>
              <SfIconArrowBack />
            </template>
            home
          </SfButton>
          <SfButton
            :tag="NuxtLink"
            :to="backHref"
            class="hidden md:flex"
            variant="tertiary"
          >
            <template #prefix>
              <SfIconArrowBack />
            </template>
            categorias
          </SfButton>
        </div>
        <span v-if="isLoading && !cart" class="!flex justify-center my-40 h-24">
          <SfLoaderCircular size="3xl" />
        </span>
        <slot v-else />
      </div>
    </NarrowContainer>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import { SfButton, SfIconArrowBack, SfLoaderCircular } from '@storefront-ui/vue'
</script>
