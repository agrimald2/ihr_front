<template>
  <section
    class="w-full flex flex-wrap justify-center gap-y-8 gap-x-8 mt-5 mb-5 px-10"
  >
    <h1 class="text-3xl">Search in our categories</h1>
    <CardCarrousel :items="items"/>
  </section>
</template>
<script lang="ts" setup>

defineProps({
  items: {
    type: Array<object>,
    default: []
  }
})
</script>

