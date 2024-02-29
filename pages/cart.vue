<template>
  <NuxtLayout
    name="checkout"
    :back-href="paths.category"
    back-label-desktop="carito de compra"
    :back-label-mobile="atras"
    :heading="carito"
  >
    <CartPageContent />
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>
